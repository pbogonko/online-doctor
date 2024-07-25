/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import useFetchData from "../../hooks/useFetchData"
import { BASE_URL } from "../../config"
import { FormatDate } from "../../utils/DateFormat"
import Loading from "../../Loader/Loading"
import Error from "../../Error/Error"
import UserCard from "../../layout/User/User"
function Appointments() {
  const {data:appointments,loading,error}=useFetchData(`${BASE_URL}/doctors/appointments/doctorappointments`)
  
  
  
return (





      <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope='col' className="px-6 py-3">Name</th>
          <th scope='col' className="px-6 py-3">Gender</th>
          <th scope='col' className="px-6 py-3">Payment</th>
          <th scope='col' className="px-6 py-3">Price</th>
          <th scope='col' className="px-6 py-3">Booked on</th>
        </tr>
      </thead>
      <tbody>
        {appointments?.map(item=>(<tr key={item._id}>
          
          <th scope='row' className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
            <img src={item.user?.photo} alt="" className="w-10 h-10 rounded-full" />
            <div className="pl-3">
              <div className="text-base font-semibold">
                {item?.name}
              </div>
              <div className="text-normal text-gray-500">{item.user?.email}</div>
            </div>
          </th>
           <td className="px-6 py-4">{item.user.gender}</td>
          <td className="px-6 py-4">
            {item.isPaid && (
              <div className="flex items-center">
                <div className="h-2 5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                Paid
              </div>
            )}
             {!item.isPaid && (
              <div className="flex items-center">
                <div className="h-2 5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                unPaid
              </div>
            )}
          </td>
          <td className="px-6 py-4">{item.ticketPrice}</td>
          <td className="px-6 py-4">{FormatDate(item.createdAt)}</td> 
        </tr>
      ))}
      </tbody>
    </table>
)
}
 // <div>
     {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50">
         <tr>
           <th scope='col' className="px-6 py-3">Name</th>
           <th scope='col' className="px-6 py-3">Gender</th>
           <th scope='col' className="px-6 py-3">Payment</th>
           <th scope='col' className="px-6 py-3">Price</th>
           <th scope='col' className="px-6 py-3">Booked on</th>
         </tr>
     </thead>
     {
          loading && !error &&<Loading/>

      }
      {!loading && error && <Error errMessage={error}/>}
      {!loading && !error && <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
          appointments.map(user=><UserCard user={user} key={user._id}/>)
        }
        </div>}
        { !loading && !error && appointments.length===0 &&(
          // eslint-disable-next-line react/no-unescaped-entities
          <h2 className="mt-5 text-center   leading-7 text-[20px] font-semibold text-primaryColor">you haven't booked any user yet</h2>
        )} */}

  //</div>


export default Appointments















// import { FormatDate } from "../../utils/DateFormat"


// function Appointments({appointments}) {
//   return (
//     <table className="w-full text-left text-sm text-gray-500">
//       <thead className="text-xs text-gray-700 uppercase bg-gray-50">
//         <tr>
//           <th scope='col' className="px-6 py-3">Name</th>
//           <th scope='col' className="px-6 py-3">Gender</th>
//           <th scope='col' className="px-6 py-3">Payment</th>
//           <th scope='col' className="px-6 py-3">Price</th>
//           <th scope='col' className="px-6 py-3">Booked on</th>
//         </tr>
//       </thead>
//       <tbody>
//         {appointments?.map(item=>(<tr key={item._id}>
//           <th scope='row' className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
//             <img src={item.user.photo} alt="" className="w-10 h-10 rounded-full" />
//             <div className="pl-3">
//               <div className="text-base font-semibold">
//                 {item.user.name}
//               </div>
//               <div className="text-normal text-gray-500">{item.user.email}</div>
//             </div>
//           </th>
//           <td className="px-6 py-4">{item.user.gender}</td>
//           <td className="px-6 py-4">
//             {item.isPaid && (
//               <div className="flex items-center">
//                 <div className="h-2 5 w-2.5 rounded-full bg-green-500 mr-2"></div>
//                 Paid
//               </div>
//             )}
//              {!item.isPaid && (
//               <div className="flex items-center">
//                 <div className="h-2 5 w-2.5 rounded-full bg-red-500 mr-2"></div>
//                 unPaid
//               </div>
//             )}
//           </td>
//           <td className="px-6 py-4">{item.ticketPrice}</td>
//           <td className="px-6 py-4">{FormatDate(item.createdAt)}</td>
//         </tr>
//       ))}
//       </tbody>
//     </table>
//   )
// }

// export default Appointments




//import { useState, useEffect } from 'react';
// import { BASE_URL } from '../../config';

// import useFetchData from '../../hooks/useFetchData';
// const Appointments = () => {
//   const {data:appointments}=useFetchData(`${BASE_URL}/doctors/appointments/doctorappointments`)
  

    // useEffect(() => {
    //     const fetchAppointments = async () => {
    //         try {
    //             const response = await fetch(`${BASE_URL}/doctors/appointments/doctorappointments`,{
    //                 method:'get',
    //                 headers:{Authorization:`Bearer ${token}`},
      
        
         
    //             });
    //             console.log(response)
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch appointments');
    //             }
    //             const data = await response.json();
    //             setAppointments(data.data); // Assuming your data structure is data.data
    //         } catch (error) {
    //             console.error('Error fetching appointments:', error);
    //         }
    //     };

    //     fetchAppointments();
    // }, [doctorId]);

//     return (
//         <div>
//             <h2>Appointments for Doctor</h2>
//             <ul>
//                 {appointments.map(appointment => (
//                     <li key={appointment._id}>
//                         <p><strong>Patient Name:</strong> {appointment.user.name}</p>
//                         <p><strong>Appointment Date:</strong> {new Date(appointment.createdAt).toLocaleDateString()}</p>
//                         {/* Add more details as needed */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Appointments;



// import React, { useState, useEffect } from 'react';

// const DoctorAppointments = ({ doctorId }) => {
//     const [appointments, setAppointments] = useState([]);

//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 const response = await fetch(`/api/doctor/${doctorId}/appointments`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch appointments');
//                 }
//                 const data = await response.json();
//                 setAppointments(data.data); // Assuming your data structure is data.data
//             } catch (error) {
//                 console.error('Error fetching appointments:', error);
//             }
//         };

//         fetchAppointments();
//     }, [doctorId]);

//     return (
//         <div>
//             <h2>Appointments for Doctor</h2>
//             <ul>
//                 {appointments.map(appointment => (
//                     <li key={appointment._id}>
//                         <p><strong>Patient Name:</strong> {appointment.user.name}</p>
//                         <p><strong>Appointment Date:</strong> {new Date(appointment.createdAt).toLocaleDateString()}</p>
//                         {/* Add more details as needed */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default DoctorAppointments;
