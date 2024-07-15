/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL, token} from "../../config"
import { toast } from "react-toastify"
import Input from "../../components/input"
import Button from "../../components/Button"
import HashLoader from "react-spinners/HashLoader"
import uploadImageTocloudinary from "../../utils/uploadCloudinary"

function Profile({user}) {
  const [selectedFile,setSelectedFile]=useState(null)
 
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    photo:null,
    gender:'',
    bloodType:''

  })
  const navigate=useNavigate()
  useEffect(()=>{
    
    setFormData({name:user.name,email:user.email,photo:user.photo,gender:user.gender,bloodType:user.bloodType})
  },[user])
  const [loading,isLoading]=useState(false)
  const handleInputChange=e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
   
  }

  const handleFileinput=async (e)=>{
    const file=(e.target.files[0])
    

    const data=await uploadImageTocloudinary(file)
 
    setSelectedFile(data.url)
    setFormData({...formData,photo:data.url})
    console.log(data)
  }
  const submitHandler=async (event)=>{ 
    event.preventDefault()
    isLoading(true)
    
    try {
      
      const res=await fetch(`${BASE_URL}/users/${user._id}`,
        {
          method:'put',
          headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${token}`
          },
          body:JSON.stringify(formData)
        }
      )
      const {message}=await res.json
      if(!res.ok){
        throw new  Error(message)
      }
      isLoading(false) 
      toast.success(message)
      navigate('/users/profile/me')
    } catch (error) {
      toast.error(error.message)
      isLoading(false)
    }
    // send form data to the server
  }
  return (
    <div className="mt-10">
       <form action="" 
            onSubmit={submitHandler} className="ml-10">
              <div className="mb-5">
                <Input
                  type="text"
                  placeHolder="Full Name"
                  name="name"
                  autoComplete='on'
                  value={formData.name}
                  method={handleInputChange}
                  className="w-full max-w-[400px] pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <Input
                  type="email"
                  placeHolder={"Enter your email"}
                  autoComplete='on'
                  name="email"
                  value={formData.email}
                  method={handleInputChange}
                  className="w-full max-w-[400px] pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  
                  ariaReadOnly={'aria-readonly'}
                  readOnly={'readOnly'}
                />
              </div>
              <div className="mb-5">
                <Input
                  type="password"
                  placeHolder="Enter your password"
                  autoComplete='on'
                  name="password"
                  value={formData.password}
                  method={handleInputChange}
          
                  className="w-full max-w-[400px] pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  
                />
                   <Input
                  type="text"
                  placeHolder="Blood Type"
                  autoComplete='on'
                  name="bloodType"
                  value={formData.bloodType}
                  method={handleInputChange}
          
                  className="w-full max-w-[400px] pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
               
                <label htmlFor="gender" className="text-headingColor font-bold text-[16px]">
                  Gender
                  <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </label>
              </div>
              <div className="mb-5 flex items-center gap-3">
               {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border border-solid border-primaryColor flex items-center">
                  <img src={formData.photo} className="w-full rounded-full" alt="" />
                </figure>}
                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customfile"
                    onChange={handleFileinput}
                    accept=".jpg,.png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customfile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    {selectedFile?selectedFile.name :'Upload photo'}
                  </label>
                </div>
              </div>
              <div className="mt-7">
                <Button
                  disabled={loading && true}
                  type="submit"
                  className="w-[10rem] bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-4"
                  name=  {loading? <HashLoader size={25} color='#ffffff'/>:'Update '}
                />
               
                
              </div>
           
            </form>
    </div>
  )
}

export default Profile



















// function Profile({user}) {

//   const [selectedFile,setSelectedFile]=useState(null)
  
//   const [formData,setFormData]=useState({
//     name:'',
//     email:'',
//     password:'',
//     photo:null,
//     gender:'',
//     bloodType:''

//   })
//   const navigate=useNavigate()
// console.log(user)
//   useEffect(()=>{
//     setFormData({name:user.name,email:user.email,photo:user.photo,gender:user.gender,bloodType:user.bloodType})
//   },[user])
//   const [loading,isLoading]=useState(false)
//   const handleInputChange=e=>{
//     setFormData({...formData,[e.target.name]:e.target.value})
   
//   }

//   const handleFileinput=async (e)=>{
//     const file=(e.target.files[0])
//     //later we will use cloudinary to upload images

//     const data=await uploadImageTocloudinary(file)
    
//     setSelectedFile(data.url)
//     setFormData({...formData,photo:data.url})
//     console.log(data)
//   }
//   const submitHandler=async (event)=>{ 
//     event.preventDefault()
//     isLoading(true)
    
//     try {
      
//       const res=await fetch(`${BASE_URL}/users/${user._id}`,
//         {
//           method:'put',
//           headers:{
//             'Content-Type':'application/json',
//             Authorization:`Bearer ${token}`
//           },
//           body:JSON.stringify(formData)
//         }
//       )
//       const {message}=await res.json
//       if(!res.ok){
//         throw new  Error(message)
//       }
//       isLoading(false) 
//       toast.success(message)
//       navigate('/users/profile/me')
//     } catch (error) {
//       toast.error(error.message)
//       isLoading(false)
//     }
//     // send form data to the server
//   }
//   return (
//     <div className="mt-10">
//        <form action="" 
//             onSubmit={submitHandler} className="ml-10">
//               <div className="mb-5">
//                 <Input
//                   type="text"
//                   placeHolder="Full Name"
//                   name="name"
//                   autoComplete='on'
//                   value={formData.name}
//                   method={handleInputChange}
//                   className="w-full max-w-[400px] pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
//                   required
//                 />
//               </div>
//               <div className="mb-5">
//                 <Input
//                   type="email"
//                   placeHolder={"Enter your email"}
//                   autoComplete='on'
//                   name="email"
//                   value={formData.email}
//                   method={handleInputChange}
//                   className="w-full max-w-[400px] pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
//                   required
//                 />
//               </div>
//               <div className="mb-5">
//                 <Input
//                   type="password"
//                   placeHolder="Enter your password"
//                   autoComplete='on'
//                   name="password"
//                   value={formData.password}
//                   method={handleInputChange}
          
//                   className="w-full max-w-[400px] pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  
//                 />
//               </div>

//               <div className="mb-5">
//                 <Input
//                   type="text"
//                   placeHolder="Blood Type"
//                   autoComplete='off'
//                   name="BloodType"
//                   value={formData.bloodType}
//                   method={handleInputChange}
          
//                   className="w-full max-w-[400px] pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
//                   required
//                 />
//               </div>
//               <div className="mb-5 flex items-center justify-between">
          
//                 <label htmlFor="gender" className="text-headingColor font-bold text-[16px]">
//                   Gender
//                   <select
//                     name="gender"
//                     id="gender"
//                     value={formData.gender}
//                     onChange={handleInputChange}
//                     className="text-textColor font-semibold text-[15px] leading-7 py-3 focus:outline-none"
//                   >
//                     <option value="">Select</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="others">Others</option>
//                   </select>
//                 </label>
//               </div>
//               <div className="mb-5 flex items-center gap-3">
//                {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border border-solid border-primaryColor flex items-center">
//                   <img src={formData.photo} className="w-full rounded-full" alt="" />
//                 </figure>}
//                 <div className="relative w-[130px] h-[50px]">
//                   <input
//                     type="file"
//                     name="photo"
//                     id="customfile"
//                     onChange={handleFileinput}
//                     accept=".jpg,.png"
//                     className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
//                   />
//                   <label
//                     htmlFor="customfile"
//                     className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
//                   >
//                     Upload photo
//                   </label>
//                 </div>
//               </div>
//               <div className="mt-7">
//                 <Button
//                   disabled={loading && true}
//                   type="submit"
//                   className="w-[10rem] bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-4"
//                   name=  {loading? <HashLoader size={35} color='#ffffff'/>:'Update'}
//                 />
               
                
//               </div>
              
//             </form>
//     </div>
//   )
// }

// export default Profile