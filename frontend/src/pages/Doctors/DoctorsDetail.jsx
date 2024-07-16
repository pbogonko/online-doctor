import { useState } from 'react'
import { starIcon} from '../../assets/images'
import DoctorsAbout from './DoctorsAbout'
import DoctorFeedback from './DoctorFeedback'
import SidePanel from '../../layout/SidePanel'
import { BASE_URL } from '../../config'
import Loading from '../../Loader/Loading'
import Error from '../../Error/Error'
import useFetchData from '../../hooks/useFetchData'
import { useParams } from 'react-router-dom'

function DoctorsDetail() {
  const {id}=useParams()

  
  const [tab ,setTab]=useState('about')
  const {data:doctor,loading,error}=useFetchData(`${BASE_URL}/doctors/${id}`)
  const {
    name,
    totalRating,
    bio,
    averageRating,
    specialization,
    ticketPrice,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    about,
    photo,
  }=doctor
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
      {loading && <Loading/>}
      {error && <Error/>}
        {!loading && !error && <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
            <figure className='max-w-[200px] max-h-[200px]'>
              <img src={photo} alt="" className='w-full' />
            </figure>
            <div>
              <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                {specialization}
              </span>
              <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
              {name}
              </h3>
              <div className="flex items-center gap-[6px]">
                <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                  lg:leading-7 font-semibold text-headingColor">
                  <img src={starIcon} alt="" />
                  {averageRating}
                </span>
                <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold
                  text-textColor">({totalRating})</span>
              </div>
              <p className="text_para text-[14px] md:text-[15px] leading-5">{bio}</p>

            </div>
          </div>
          <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
            <button onClick={()=>setTab('about') } className={`${tab==='about' && 'border-b border-solid border-primaryColor'}  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}>
              About</button>
              <button onClick={()=>setTab('feedback')} className={`${tab==='feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
              feedback </button>
          </div>
           <div className="mt-[50px]">
            {/* conditional rendering in action */}
            {tab==='about' &&<DoctorsAbout name={name} about={about} qualifications={qualifications} experiences={experiences}/>
            }
            {
              tab==='feedback'&&<DoctorFeedback reviews={reviews} totalRating={totalRating}/>
            }
           </div>
          </div>
          <div>
            <SidePanel doctorId={doctor._id} ticketPrice={ticketPrice} timeSlots={timeSlots}/> 
          </div>
        </div>}
      </div>
    </section>
  )
}

export default DoctorsDetail