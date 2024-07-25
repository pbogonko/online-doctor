/* eslint-disable react/prop-types */

import {heroImg01} from '../../assets/images'


function UserCard({ user }) {
  const {
    name,
    email,
    photo,
    
  } = user;
  
  
  return (
    <table>
      
    </table>
    // <div className="p-3 lg:p-5">
     
    //   <div>
    //     <img src={photo||heroImg01} alt="" />
    //   </div>
    //   <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5">
    //     {name}
    //   </h2>
    //   <div className="mt-2 lg:mt-4 flex items-center justify-between">
    //     <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
    //       {email}
    //     </span>
        
    //   </div>
    //   <div className="mt-[18px] lg:mt-5 flex  items-center justify-between">
       
        
    //   </div>
    // </div>
  );
}

export default UserCard;