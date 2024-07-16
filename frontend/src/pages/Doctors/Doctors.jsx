import DoctorCard from "../../layout/DoctorsList/DoctorCard";

import Testiminial from "../Testimonial/Testiminial";
import Button from "../../components/Button";
import { BASE_URL } from "../../config";
import Loading from "../../Loader/Loading";
import Error from "../../Error/Error";
import useFetchData from "../../hooks/useFetchData";
import { useEffect, useState } from "react";

function Doctors() {
  const [query,setQuery]=useState( ' ' )
  const [debounceQuery,setDebounceQuery]=useState('')
  const handleSearch=()=>{
    setQuery(query.trim())
    console.log('handle search')
  } 
useEffect(()=>{
  const timeout=setTimeout(() => {
    setDebounceQuery(query)
  }, 700);
  return ()=>clearTimeout(timeout)
},[query])

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);


 

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center ">
          <h2 className="heading">Find a doctor</h2>
          <div className="max w-[570px] mt-[30px] mx-auto bg-[#1943832c] rounded-md flex items-center ">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full   focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="search doctor by name or specifications " value={query} onChange={e=>setQuery(e.target.value)}
            />

            <Button
              className=" mt- rounded-[5px] rounded-r-md bg-primaryColor text-white px-2 h-12 "
              name="Search"  method={handleSearch}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loading />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4  ">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <div className="heading text-center">
              <h2>what do our patients say?</h2>
              <p className="text_para text-center">
                world care for everone. our health system offers unmatched,
                expert care
              </p>
            </div>
          </div>
          <Testiminial />
        </div>
      </section>
    </>
  );
}

export default Doctors;
