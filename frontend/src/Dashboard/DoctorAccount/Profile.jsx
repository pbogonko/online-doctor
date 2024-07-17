/* eslint-disable react/prop-types */
import { useState,useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageTocloudinary from './../../utils/uploadCloudinary'
import {BASE_URL,token} from '../../config'
import {toast} from 'react-toastify'
function Profile({doctorData}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password:"",
    phone: "",
    bio: "",
    specialization: "",
    ticketPrice: '',
    qualifications: [
    //   {
    //     startingDate: "",
    //     endingDate: "",
    //     degree: "",
    //     university: "",
    //   },
    ],
    experiences: [ 
    //      {
    //     startingDate: "",
    //     endingDate: "",
    //     experiences: "",
    //     hosipital: "",
    //   },
    ],
    timeSlots: [
      {
        // day: "",
        // startingTime: "",
        // endingTime: ""
    }
    ],
    about:'',
    photo:null
  });
  useEffect(()=>{
    setFormData({
      name:doctorData?.name,
      email:doctorData?.email,
    
      phone:doctorData?.phone,
      bio:doctorData?.bio,
      gender:doctorData?.gender,
      specialization:doctorData?.specialization,
      ticketPrice:doctorData?.ticketPrice,
      qualifications:doctorData?.qualifications,
      experiences:doctorData?.experiences,
      timeSlots:doctorData?.timeSlots,
      about:doctorData?.about,
      photo:doctorData?.photo,

    })
      

  },[doctorData])
  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileinput=async (event)=>{
    const file=event.target.files[0]
    const data=await uploadImageTocloudinary(file)
    console.log(data)
    setFormData({...formData,photo:data?.url})
  }
  const updateProfileHandler=async (e)=>{
    e.preventDefault()
  

    try{
    
      const res=await fetch(`${BASE_URL}/doctors/${doctorData._id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json',
          Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(formData)
      })
      const result=await res.json()
      if(!res.ok){
        throw Error(result.message)
      }
      toast.success(result.message);
    }catch (err){
      toast.error(err.message)

    }


    
  }

  const handleReusableInputChangeFunc=(key,index,event)=>{
    const {name,value}=event.target
    setFormData(prevFormData=>{
        const updateItems=[...prevFormData[key]]
        updateItems[index][name]=value
        return {
            ...prevFormData,[key]:updateItems
        }
    })
  }
  const addItem=(key,item)=>{
    setFormData(
        prevFormData=>({...prevFormData,[key]:[...prevFormData[key],item]}) )
  }
  const deleteItem=(key,index)=>{
    setFormData(prevFormData=>({...prevFormData,[key]:prevFormData[key].filter((_,i)=>i!==index)}));
  }

  const addQualification=(e)=>{
    e.preventDefault();
    addItem('qualifications', {
        startingDate: "",
        endingDate: "",
        degree: "PHD",
        university: "Dhaka Medical college",
      },)

  }
 
  const handleQualificationChange=(event,index)=>{
    handleReusableInputChangeFunc('qualifications',index,event)
  }

 
  const deleteQualification=(e,index)=>{
    e.preventDefault()
    deleteItem('qualifications',index)
  }

  const addExperience=(e)=>{
    e.preventDefault();
    addItem('experiences', {
        startingDate: "",
        endingDate: "",
       position:'senior Surgeon',
       hosipital:'Nairobi Hosipital'
      },)

  }
 
  const handleExperienceChange=(event,index)=>{
    handleReusableInputChangeFunc('experiences',index,event)
  }

 
  const deleteExeprience=(e,index)=>{
    e.preventDefault()
    deleteItem('experiences',index)
  }


  const addTimeSlot=(e)=>{
    e.preventDefault();
    addItem('timeSlots', {
        day: "Sunday",
        startingTime: "10.00",
        endingTime: "4.00"
      
      },)

  }
 
  const handleTimeSlotChange=(event,index)=>{
    handleReusableInputChangeFunc('timeSlots',index,event)
  }

 
  const deleteTimeSlot=(e,index)=>{
    e.preventDefault()
    deleteItem('timeSlots',index)
  }
  return (
    <div>
      <h2 className=" text-headingColor font-bold text-[24px] leading-9 mb-10">
        {" "}
        profile information
      </h2>
      <form action="">
        <div className="mb-5">
          <p className="form_label">Name*</p>
          <input
            type="text"
            name="name"
            id=""
            value={formData.name}
            onChange={handleChangeInput}
            placeholder="Full Name"
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Email*</p>
          <input
            type="email"
            name="email"
            id=""
            value={formData.email}
            onChange={handleChangeInput}
            placeholder="email address"
            className="form_input"
            aria-readonly
            readOnly
            disabled={true}
          />
        </div>
        <div className="mb-5">
          <p className="form_label">phone *</p>
          <input
            type="number"
            name="phone"
            id=""
            value={formData.phone}
            onChange={handleChangeInput}
            placeholder="phone number"
            className="form_input"
          />
        </div>
        <div className="mb-5">
          <p className="form_label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleChangeInput}
            placeholder="bio data"
            className="form_input"
            maxLength={100}
          />
        </div>
        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form_label">Gender*</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChangeInput}
                className=" form_input py-3.5 "
              >
                <option value="">select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <p className="form_label">Specialization*</p>
              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChangeInput}
                className=" form_input py-3.5 "
              >
                <option value="">select</option>
                <option value="surgeon">Surgery</option>
                <option value="neurologist">neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <p className="form_label">Ticket Price</p>
              <input
                type="number"
                name="ticketPrice"
                value={formData.ticketPrice}
                placeholder="100"
                className="form_input"
                onChange={handleChangeInput}
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <p className="form_label">Qualifications*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={item.degree}
                      className="form_input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={item.university}
                      className="form_input"
                      onChange={e=>handleQualificationChange(e,index)}
                    />
                  </div>
                </div>
                <button onClick={(e)=>deleteQualification(e,index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addQualification} className="bg-[#000] py-2 rounded text-white h-fit cursor-pointer">
            Add Qualifications
          </button>
        </div>
        <div className="mb-5">
          <p className="form_label">Experiences*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form_label">Starting Date*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={item.startingDate}
                      className="form_input"
                      onChange={e=>handleExperienceChange(e,index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Date*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={item.endingDate}
                      className="form_input"
                      onChange={e=>handleExperienceChange(e,index)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form_label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={item.position}
                      className="form_input"
                      onChange={e=>handleExperienceChange(e,index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Hosipital*</p>
                    <input
                      type="text"
                      name="hosipital"
                      value={item.hosipital}
                      className="form_input"
                      onChange={e=>handleExperienceChange(e,index)}
                    />
                  </div>
                </div>
                <button onClick={e=>deleteExeprience(e,index)} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addExperience} className="bg-[#000] py-2 rounded text-white h-fit cursor-pointer">
            Add Experience
          </button>
        </div>
        

        <div className="mb-5">
          <p className="form_label">Time Slots*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
                  <div>
                    <p className="form_label">Day*</p>
                    <select name='day' value={item.day} className="form_input py-3.5"
                    onChange={e=>handleTimeSlotChange(e,index)}>
                       <option value="">Select</option>

                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                       
                    </select>
                  </div>
                  <div>
                    <p className="form_label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form_input"
                      onChange={e=>handleTimeSlotChange(e,index)}
                    />
                  </div>
                  <div>
                    <p className="form_label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form_input"
                      onChange={e=>handleTimeSlotChange(e,index)}
                    />
                  </div>
                  <div onClick={e=>deleteTimeSlot(e,index)} className="flex items-center">
                    
                <button className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6 mb-[30px] cursor-pointer ">
                  <AiOutlineDelete />
                </button>
                  </div>
                </div>
           
              </div>
            </div>
          ))}
          <button onClick={addTimeSlot } className="bg-[#000] py-2 rounded text-white h-fit cursor-pointer">
            Add TimeSlot
          </button>
        </div>
        <div className="mb-5">
            <p className="form_label">About*</p>
            <textarea name="about" id="" rows='5' value={formData.about} placeholder="write a brief description about you" onChange={handleChangeInput}
            className="form_input"></textarea>
        </div>
        <div className="mb-5 flex item-center gap-3">
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
                    Upload photo
                  </label>
                </div>
              </div>
        <div className="mt-7">
            <button type='submit' onClick={updateProfileHandler} className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg">update profile</button>
        </div>


      </form>
    </div>
  );
}

export default Profile;
