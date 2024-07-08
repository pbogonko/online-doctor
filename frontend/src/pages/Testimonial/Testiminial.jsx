 
import {Pagination} from 'swiper/modules'
import { Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { PatientAvatar } from '../../assets/images'
import {HiStar} from  'react-icons/hi'
function Testiminial() {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{clickable:true}}
        breakpoints={{
            640:{
                slidesPerView:1,
                spaceBetween:0
            },
            768:{
                slidesPerView:2,
                spaceBetween:20
            },
            1024:{
                slidesPerView:3,
                spaceBetween:30,
            },
            1440: { 
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }}>
            
             <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex gap-[13px] items-center">
                        <img src={PatientAvatar} alt="" />
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                            polycarp bogonko
                        </h4>
                        <div className="flex items-center gap-[2px]">
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>  
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                         I have taken medical services from them. they treat so well and they are providing the best medical services
                     </p>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex gap-[13px] items-center">
                        <img src={PatientAvatar} alt="" />
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                            polycarp bogonko
                        </h4>
                        <div className="flex items-center gap-[2px]">
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>  
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                         I have taken medical services from them. they treat so well and they are providing the best medical services
                     </p>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex gap-[13px] items-center">
                        <img src={PatientAvatar} alt="" />
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                            polycarp bogonko
                        </h4>
                        <div className="flex items-center gap-[2px]">
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>  
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                         I have taken medical services from them. they treat so well and they are providing the best medical services
                     </p>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex gap-[13px] items-center">
                        <img src={PatientAvatar} alt="" />
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                            polycarp bogonko
                        </h4>
                        <div className="flex items-center gap-[2px]">
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>  
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                         I have taken medical services from them. they treat so well and they are providing the best medical services
                     </p>
                </div>
             </SwiperSlide>
             <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex gap-[13px] items-center">
                        <img src={PatientAvatar} alt="" />
                        <div>
                        <h4 className="text-[18px] leading-[30px] font-semibold text-textColor">
                            polycarp bogonko
                        </h4>
                        <div className="flex items-center gap-[2px]">
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                                 <HiStar className='text-yellowColor w-[18px] h-5'/>
                        </div>
                    </div>  
                </div>
                <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                         I have taken medical services from them. they treat so well and they are providing the best medical services
                     </p>
                </div>
             </SwiperSlide>
             
             

        </Swiper>

    </div>  
  )
}

export default Testiminial