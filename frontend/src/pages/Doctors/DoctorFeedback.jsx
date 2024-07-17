/* eslint-disable react/prop-types */
import { useState } from "react";

import { FormatDate } from "../../utils/DateFormat";
import { AiFillStar } from "react-icons/ai";
import Feedbackform from "./Feedbackform";
import Button from "../../components/Button";

const DoctorFeedback = ({ reviews, totalRating }) => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(true);
  
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          All reviews ({totalRating})
        </h4>
        {reviews?.map((review, index) => 
          
         ( <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img src={review?.user?.photo} alt="" className="w-full" />
              </figure>
              <div>
                <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                  {review?.user?.name}
                </h5>
                <p className="text-[14px] leading-6 text-textColor">
                  {FormatDate(review?.createdAt)}
                </p>
                <p className="text_para mt-3 font-medium text-[15px]">
                {review.reviewText}
                </p>
              </div>
            </div>
            <p className="flex gap-1">
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067FF" />
              ))}
            </p>
          </div>)
        )}
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <Button
            className="btn"
            onClick={() => setShowFeedbackForm(true)}
            name="give feedback"
          />
        </div>
      )}
      {showFeedbackForm && <Feedbackform />}
    </div>
  );
};

export default DoctorFeedback;
