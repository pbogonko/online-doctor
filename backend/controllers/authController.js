  import User from '../models/UserSchema.js'
  import Doctor from '../models/DoctorSchema.js'
  import jwt from 'jsonwebtoken'
  import bcrypt from 'bcryptjs'
  import dotenv from 'dotenv'
  dotenv.config()
  // auth0 is going to generate a token for us
  const generateToken=user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
      expiresIn:'15d'
    })
  }
  export const register=async(req,res)=>{
    try{
    const {email,password,name,role,photo,gender}=req.body;
    const hashedPasword=await bcrypt.hash(password,10)
    let user=null
    //checking role
    if (role==='patient'){
      user=await User.create({
      name,
      email,
      photo,
      gender,
      role,
      password:hashedPasword

      });
    }else if(role==='doctor'){
      user=await Doctor.create({
        name,
        email,
        photo,
        gender,
        role,
        password:hashedPasword
      })
    }
    else{
      return res.status(403).json({message:"user creation failed,wrong data provided"})
    }
    if(user){
      return res.status(201).json({success:true,message:"user created successfully"})
    }
    
  }catch(err){
    return res.status(500).json({success:false,message:err.message})
    
  }
}
            
  //       if(role==='patient'){
  //         user=await  User.findOne({email})
  //       }else if(role==='doctor'){
  //           user=await Doctor.findOne({email})
  //       }
  //       if(role==='patient'){
  //  user= User.create({
  //     name,
  //     email,
  //     photo,
  //     gender,
  //     role,
  //     password:hashedPasword
  //   })
  // }
  // // if(role==='doctor'){
  //   user= Doctor.create({
  //     name,
  //     email,
  //     photo,
  //     gender,
  //     role,
  //     password:hashedPasword
  //   })
// 
 // }
  //   user.then((users)=>{
  //     res.status(200).json({success:true,message:'User successfully created'})
              
       
  //   })
  //   .catch((err)=>{
  //     res.status(500).json({success:false,message:err.message})
  //     })

  // }

  export const login=async(req,res)=>{
    try{
    const {email}=req.body
      let user=null
      const patient=await User.findOne({email})
      const doctor=await Doctor.findOne({email})
    
      if(patient && patient.role==='patient'){
        user=patient
        
      
      }
     else if(doctor&& doctor.role==='doctor'){
        user=doctor
        
      }
     

      // //check if user exists or not
      if(!user){
        return res.status(404).json({message:'user not found'})
      }
      //       //compare the passwords to see if they match
      const isPasswordMatch= await bcrypt.compare(req.body.password,user.password)

      if(!isPasswordMatch){
        return res.status(400).json({status:false,message:'invalid credentials'})
      }
//        //get token
      const token=generateToken(user);
      const {password,role,appointments,...rest}=user._doc
        res.status(200).json({status:true,message:'successfully login',token,data:{...rest},role})
      
      
      
    }catch(err){
        console.log(err)
        res.status(500).json({status:false,message:'failed to login'})

      }
     
    


  }
