import User from '../models/UserSchema.js'
import Booking from '../models/BookingSchema.js'
import Doctor from '../models/DoctorSchema.js'
export const updateUser=async(req,res)=>{
const id=req.params.id
    try{
        const updateUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({success:true,message:'Successfully updated',data:updateUser})
    }catch(err){
        res.status(500).json({success:false,message:'failed to update'})
    }
};
export const deleteUser=async(req,res)=>{
    const id=req.params.id
        try{
            const deleteuser=await User.findByIdAndDelete(id,{$set:req.body},{new:true})
            res.status(200).json({success:true,message:'Successfully deleted',data:deleteuser})
        }catch(err){
            res.status(500).json({success:false,message:'failed to delete'})
        }
    };
    //this one gets a single user
    export const getSingleUser=async(req,res)=>{
        const id=req.params.id
            try{
                const userFound=await User.findById(id).select('-password')
                res.status(200).json({success:true,message:'User found',data:userFound})
            }catch(err){
                res.status(404).json({success:false,message:'no user found'})
            }
        };
        //finds all users 
        export const getAllUser=async(req,res)=>{
            const id=req.params.id
                try{
                    const Alluser=await User.find({}).select('-password')
                    res.status(200).json({success:true,message:'User found',data:Alluser})
                }catch(err){
                    res.status(404).json({success:false,message:'not found'})
                }
            };
            //get user profile
            export const getUserProfile=async(req,res)=>{
                const userId=req.userId
                try{
                    const user=await User.findById(userId)
                    if(!user){
                        return res.status(404).json({success:false,message:'user not found'})

                    }
                    const {password,...rest}=user._doc
                    res.status(200).json({success:true,message:"profile info is getting ready",data:{...rest}})

                    

                }catch(err){
                    return res.status(404).json({success:false,message:'something went wrong'})

                }
            }
          
           export  const getMyAppointments=async(req,res)=>{
                try{
                    //retrieving appointments for specific user
                    const bookings=await Booking.find({user:req.userId})
                    //extract doctor ids from appointment bookings
                    const doctorids=bookings.map(element=>element.doctor.id)
                    //retrieve doctors using doctor ids
                    const doctor=await Doctor.find({_id:{$in:doctorids}}).select('-password')
                }catch(err){
                    return res.status(500  ).json({success:false,message:'something went wrong'})

                }
            }
           