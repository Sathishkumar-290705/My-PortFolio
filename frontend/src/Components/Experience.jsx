import { Book, Briefcase, Calendar,  MapPin,} from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Experience = ({data}) => {

  const [userdata , setUserData] = useState([]);


  const experience = userdata[0]?.experience;
  console.log(experience);
  
  console.log(userdata);
    useEffect(()=>{
    setUserData(data)
  },[data])
  return <div id='experience' className='mt-24'>
    <h2 className='text-soft_coal mini:text-2xl nl:text-3xl '> Work Experience & Learning Path </h2>
    <div className='w-[86%] h-auto flex flex-col gap-12 items-center mx-auto mt-12'>
      {/* LEARNING PATH */}
      <div className='flex flex-col  gap-8'>
        <h4 className='text-center  mini:ml-[3rem]  sp:ml-2 np:ml-[1rem] lp:ml-[1.8rem] gap-2 flex flex-row mini:text-xl font-bold   '><Book className='' /> Learning Path</h4>
        <div className='text-justify flex flex-col   mt:flex-row gap-8 mini:w-[92%]  mx-auto mt:w-full border-2 bg-muted_pale border-text mini:p-4'>
          <div className='flex flex-row mini:flex-col mt:flex-col gap-4 mini:w-[90%] my-auto'>
              <div>
                <h2 className='mini:text-xl text-4xl  font-bold text-start '> {experience?.Academic_qualification} </h2>
              <p className='mini:text-sm '> {experience?.college} </p>
              </div>
              <div className='flex flex-col gap-2 w-fit '>
                  <div className='flex flex-row gap-2 items-center'>
                    <MapPin className='my-auto'/> 
                    <div>
                        <p className='mini:text-sm '>{experience?.education_place}</p>
                    </div>
                  </div>
                  <div className='flex flex-row gap-2  items-center'>
                        <Calendar/> 
                        <p className='mini:text-sm'> {experience?.education_time} </p> 
                  </div>
              </div>
          </div>
          <div className='flex-1 bg-softened p-2 rounded-xl '>
              <p className='text-text2 mini:text-sm mini:p-2 '>
                {experience?.learningPath}
              </p>
          </div>
        </div>
      </div>
      {/* EXPERIENCE */}
      <div className='flex flex-col gap-8'>
        <h4 className='flex flex-row  gap-2 text-center ml-2 sp:mt-4 np:ml-[1.5rem] lp:ml-[1.8rem] w-fit   mini:gap-2  mini:text-xl font-semibold  '><Briefcase/> Experience</h4>
        <div className='text-justify bg-muted_pale flex  flex-col mt:flex-row-reverse gap-8  mini:w-[92%]  mx-auto mt:w-full border-2 border-text mini:p-4'>
          <div className='flex flex-row mini:flex-col  mt:flex-col gap-4 mini:w-[90%] my-auto'>
              <div>
                <h2 className='text-4xl  font-semibold text-start mini:text-xl '> {experience?.working_role} </h2>
              <p className='mini:text-sm items-center'> {experience?.college} </p>
              </div>
              <div className='flex flex-col gap-2 '>
                  <div className='flex flex-row gap-2 items-center'>
                    <MapPin className='my-auto'/> 
                    <div>
                        <p className='mini:text-sm '> {experience?.work_place} </p>
                    </div>
                  </div>
                  <div className='flex flex-row gap-2 items-center '>
                        <Calendar/> 
                        <p className='mini:text-sm '> {experience?.working_time}</p> 
                  </div>
              </div>
          </div>
          <div className='flex-1 bg-softened p-2 rounded-xl'>
              <p className='text-text2 mini:text-sm mini:p-2'>
                {experience?.work}
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Experience;