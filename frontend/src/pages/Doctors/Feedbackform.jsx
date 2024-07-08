import { useState } from "react";
import { AiFillStar } from "react-icons/ai"
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";

function Feedbackform() {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    const [review,setReview]=useState('')
    const handleSubmitReview=async (e)=>{
        e.preventDefault();
        //later we will use our api
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
        <Button type='submit' className="btn" onClick={handleSubmitReview} name='Submit Feedback'/>

        


    </form>
  )
}

export default Feedbackform