import jwt from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from "../models/UserSchema.js"
import dotenv from 'dotenv'
import { auth } from 'express-oauth2-jwt-bearer'
dotenv.config()

export const authenticate=async (req,res,next)=>{
    //getting token from headers

    const authToken=req.headers.authorization;

    //check if token exists
    if(!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({success:false,message:'No token,authorization denied'});
    }
    try {
        const token=authToken.split(" ")[1]; 
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)
        //verify token
        req.userId=decoded.id
        req.role=decoded.role
        
          
        
        next();
  
    } catch (error) {
        if(error.name==='TokenExpiredError'){
            return res.status(401).json({message:'Token is expired'})
        }
        return res.status(401).json({message:error.message})
    }
 
}
//using auth0 for authentication
// export const authenticate=auth({
//       audience: process.env.AUTH0_AUDIENCE,
//      issuerBaseURL: process.env.AUTH0_DOMAIN,
//       tokenSigningAlg: 'RS256'
// })
export const restrict=roles=>async(req,res,next)=>{
    const userId=req.userId
    const role=req.role
    let user;
    const patient=await User.findById(userId)
    const doctor=await Doctor.findById(userId)
    if(role==='patient'){
        user=patient
        
        
    } 
   else if(role==='doctor'){
        user=doctor
        
        
        
    }
    else{
        return res.status(401).json({success:false, message:"User not found"})
    }
    if(!roles.includes(user.role)){
       
        return res.status(400).json({success:false, message:"you are not authorized"})
    }
    next()

}