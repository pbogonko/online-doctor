import Doctor from '../models/DoctorSchema.js'
import Booking from '../models/BookingSchema.js'
export const updateDoctor=async(req,res)=>{
const id=req.params.id
    try{
        const doctor=await Doctor.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.status(200).json({success:true,message:'Successfully updated',data:doctor})
    }catch(err){
        res.status(500).json({success:false,message:'failed to update'})
    }
};
export const deleteDoctor=async(req,res)=>{
    const id=req.params.id
        try{
            const deletedoctor=await Doctor.findByIdAndDelete(id,{$set:req.body},{new:true})
            res.status(200).json({success:true,message:'Successfully deleted',data:deletedoctor})
        }catch(err){
            res.status(500).json({success:false,message:'failed to delete'})
        }
    };
    //this one gets a single doctor
    export const getSingleDoctor=async(req,res)=>{
        const id=req.params.id
            try{
                const doctorFound=await Doctor.findById(id).populate('reviews').select('-password')
                res.status(200).json({success:true,message:'Doctor found',data:doctorFound})
            }catch(err){
                res.status(404).json({success:false,message:'no doctor found'})
            }
        };
        //finds all doctors 
        export const getAllDoctor=async(req,res)=>{

            
                try{
                    let doctors;
                    const {query}=req.query
                    if(query){
                        doctors=await Doctor.find({isApproved:'approved',$or:[
                            {name:{$regex:query,$options:'i'}},
                            {specialization:{$regex:query,$options:'i'}}
                        ]}).select('-password');
                    }else{
                    doctors=await Doctor.find({isApproved:'approved'}).select('-password')
                    }
                    res.status(200).json({success:true,message:'Doctor found',data:doctors})
                }catch(err){
                    res.status(404).json({success:false,message:'not found'})
                }
            };
             //get user profile
             export const getdoctorProfile=async(req,res)=>{
                const doctorId=req.userId
              
                try{
                    const doctor =await Doctor.findById(doctorId)
                    
                    
                    if(!doctor){
                        return res.status(404).json({success:false,message:'doctor not found'})

                    }
                    const {password,...rest}=doctor._doc;
                    const appointment=Booking.find({doctor:doctorId})
                    res.status(200).json({success:true,message:"profile info is getting ready",data:{...rest}})

                    

                }catch(err){
                    return res.status(404).json({success:false,message:'something went wrong'})

                }
            }
           