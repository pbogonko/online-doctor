
import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import Booking from '../models/BookingSchema.js'
import Stripe from 'stripe'
import dotenv from 'dotenv'
dotenv.config()

import nodemailer from 'nodemailer'
import {google} from 'googleapis'

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID, 
    process.env.CLIENT_SECRET, 
    'http://localhost:5173' 
  );
  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN, 
  });

const transporter = nodemailer.createTransport({
    service:'gmail',
    
    auth: {
        type:'OAUTH2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: oauth2Client.getAccessToken(),
    },
});


export const getCheckoutSession=async (req,res)=>{
    try {
        const doctor=await Doctor.findById(req.params.doctorId)
        const user=await User.findById(req.userId)
        const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
        
        
        const session=await stripe.checkout.sessions.create({   
                    
            payment_method_types:['card'],
            mode:'payment',
            success_url:`${process.env.CLIENT_SITE_URL}/checkout-success`,
            cancel_url: `${req.protocol}://${req.get('   host')}/doctors/${doctor.id}`,
            customer_email:user.email,
            client_reference_id:req.params.doctorId,
            line_items:[
                {
                    price_data:{
                        currency:'usd',
                        unit_amount:doctor.ticketPrice,
                        product_data:{
                         name:doctor.name,
                         description:doctor.bio,
                         images:[doctor.photo]

                        }
                        
                    },
                    quantity:1
                }

            ]
        })
        
        const booking=new Booking({
            doctor:doctor._id,
            user:user._id,
            ticketPrice:doctor.ticketPrice,
            session:session.id
            
             
        })
        await booking.save()
        doctor.appointments.push(booking._id);
        await doctor.save();

        
        user.appointments.push(booking._id);
        await user.save();
          
            sendUserConfirmationEmail(user.email, doctor.name, session.id);

        
            sendDoctorNotificationEmail(doctor.email, user.name, session.id);
        res.status(200).json({success:true,message:'Successfully paid',session})
        
    } catch (error) {
        res.status(500).json({success:false,message:'error creating checkout session'})
        
        console.log(error.message)
    }
}

function sendUserConfirmationEmail(userEmail, doctorName, sessionId) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: 'Appointment Confirmation',
        text: `Dear ${userEmail},\n\nYour appointment with Dr. ${doctorName} has been confirmed. Session ID: ${sessionId}\n\nThank you!`,
    };
    console.log(userEmail)

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending user confirmation email:', error);
        } else {
            console.log('User confirmation email sent:', info.response);
        }
    });
}

function sendDoctorNotificationEmail(doctorEmail, userName, sessionId) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: doctorEmail,
        subject: 'New Appointment',
        text: `Dear Dr. ${userName},\n\nYou have a new appointment. Session ID: ${sessionId}\n\nThank you!`,
    };
    console.log(doctorEmail)

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending doctor notification email:', error);
        } else {
            console.log('Doctor notification email sent:', info.response);
        }
    });
}
