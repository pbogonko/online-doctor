/* eslint-disable react/prop-types */
import Button from "../components/Button"
import convertTime from "../utils/convertTime"
function  SidePanel({doctorId,ticketPrice,timeSlots}) {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md '>
        <div className="flex items-center justify-between ">
            <p className="text_para mt-0 font-semibold">Ticket Price

            </p>
            <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">ksh {ticketPrice}</span>
        </div>
        <div className="mt-30px">
          <p className="text_para mt-0 font-semibold text-headingColor">available Time slots</p>
          <ul className="mt-3">
            {timeSlots?.map((item,index)=>(
              <li key={index} className="flex item-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">{item.day.charAt(0).toUpperCase()+item.day.slice(1)}</p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">{convertTime(item.startingTime)}-{convertTime (item.endingTime)}</p>
            </li>

            ))}
            
          
          </ul>
        </div>
        <Button className="btn px-2 w-full rounded-md" name='Appointment'/>
    </div>
  )
}

export default SidePanel 