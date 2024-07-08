
import DoctorCard from '../../layout/DoctorsList/DoctorCard'
import { doctors } from '../../assets/data/doctors'
import Testiminial from '../Testimonial/Testiminial'
import Button from '../../components/Button'

function Doctors() {
  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className="container text-center bg-re">
        <h2 className="heading">Find a doctor</h2>
        <div className="max w-[570px] mt-[30px] mx-auto bg-[#1943832c] rounded-md flex items-center">
          <input type='search'
          className='py-4 pl-4 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
          placeholder='search doctor'/>
       
          <div>
            <Button className='bg-blue-600 mt-0 w-[100px] h-[50px] text-white' name='Search'/>
          </div>
        </div>
      </div>

    </section>
      
      <section>
        <div className="container">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4  '>
         {doctors.map((doctor)=><DoctorCard key={doctor.id} doctor={doctor}/>)}
    </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <div className="heading text-center">
              <h2>what do our patients say?</h2>
              <p className="text_para text-center">
                world care for everone. our health system offers unmatched, expert care
              </p>
              </div>
              
              
          </div>
          <Testiminial/>
        </div>
      </section>
    </>
  )
}

export default Doctors