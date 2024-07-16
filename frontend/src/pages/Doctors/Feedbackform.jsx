
import { useState } from "react";
import { AiFillStar } from "react-icons/ai"
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import { BASE_URL,token } from "../../config";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
function Feedbackform() {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    const [reviewText,setReview]=useState('')
    const [loading,setLoading]=useState(false)
    const {id}=useParams()
    const handleSubmitReview=async (e)=>{
        e.preventDefault();
        setLoading(true)
        
        try {
            if(!rating  || !reviewText){
                setLoading(false)
               return toast.error('rating and review fields are required')
            

            } 
            const res=await fetch(`${BASE_URL}/doctors/${id}/reviews`,{
                method:'post',
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify({rating,reviewText}) 
            })
            const result=await res.json()
        console.log(typeof(res))
            if(!res.ok){
                throw new Error(result.message)
                
            }
            setLoading(false)
            toast.success(result.message)
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
  
            
        }
        
    };
    
    
  return (
    <form action="">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">how would you rate the overall experience?</h3>
        <div>
            {[...Array(5).keys()].map((_,index)=>{
                index+=1;
                return (
                    <button
                     key={index}
                     type='button' 
                     className={`${index <=(rating || hover) ?'text-yellowColor':
                    "text-gray-400"}
                    bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                     onClick={()=>setRating(index)}
                      onMouseEnter={()=>setHover(index)} onMouseLeave={()=>setHover(rating)}
                      onDoubleClick={()=>{
                        setHover(0);
                        setRating(0);
                      }}
                    >
                        <span>
                            <AiFillStar/>
                        </span>
                    </button>
                )
            })}
        </div>
        <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">share your feedback or suggestion</h3>
    
        <Textarea className="border border-solid border-[#0066ff34] focus:outline-primaryColor w-full px-4 py-3 rounded-md" id=""
        method={e=>setReview(e.target.value)}/>
        </div>
         <Button type='submit' className="btn" method={handleSubmitReview} name={loading? <HashLoader size={25} color="#fff "/>:`Submit Feedback`}/> 
       
        


    </form>
  )
}

export default Feedbackform






