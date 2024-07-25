import { useState } from "react";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import Input from "../../components/input";

function Symptoms() {
  const [formData,setFormData]=useState({
    symptom:'',
    description:''

  })
  const handleInputChange=e=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(formData)
   
  }
  
  

  return (
    <form action="">
      
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
        please enter signs and symptoms separated by a comma
      </h3>
      <div className="mb-5">
        
        <Input
          type="text"
          placeHolder="eg. headache,fatigue etc"
          name='symptom'
          method={handleInputChange}
          value={formData.symptom}
                className="border border-solid border-[#0066ff34] focus:outline-primaryColor w-full px-4 py-3 rounded-md"
          required
        />
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          offer a brief description on how you feel
        </h3>

        <Textarea
          className="border border-solid border-[#0066ff34] focus:outline-primaryColor w-full px-4 py-3 rounded-md"
          id=""
          type='text'
          name='description'
          method={handleInputChange}
          
        
         
        />
      </div>
      <Button type="submit" className="btn" name="Submit" />
    </form>
  );
}

export default Symptoms;
