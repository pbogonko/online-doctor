







import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import DoctorsCard from '../../layout/DoctorsList/DoctorCard'
import Loading from "../../Loader/Loading"
import Error from "../../Error/Error"
function MyBooking() {
  const {data:appointments,loading,error}=useFetchData(`${BASE_URL}/users/appointments/my-appointments`)
  return (
    <div>
       {
            loading  &&<Loading/>

        }
        {/* {error && <Error errMessage={error}/>} */}
        {!loading &&  (<div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {
            appointments.map(doctor=>(
              <DoctorsCard doctor={doctor} key={doctor.id}/>
            ))
          }
             
          </div>
          )}
          { !loading &&    appointments.length===0 &&(
            <h2 className="mt-5 text-center  leading-7 text-[20px] font-semibold text-primaryColor">you did not book any doctor yet</h2>
          )}
    </div>
  )
}

export default MyBooking