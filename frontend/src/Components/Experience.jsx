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
    <h2 className='text-soft_coal'> Work Experience & Learning Path </h2>
    <div className='w-[90%] h-auto flex flex-col gap-12 items-center mx-auto mt-12'>
      {/* LEARNING PATH */}
      <div className='flex flex-col  gap-8'>
        <h4 className='text-center  flex flex-row gap-2'><Book/> Learning Path</h4>
        <div className='text-justify flex flex-col mt:flex-row gap-8 w-[90%]  mx-auto mt:w-full border-2 bg-muted_pale border-text p-12'>
          <div className='flex flex-row mt:flex-col gap-4 w-[25rem] my-auto'>
              <div>
                <h2 className='text-4xl  font-bold text-start'> {experience?.Academic_qualification} </h2>
              <p> {experience?.college} </p>
              </div>
              <div className='flex flex-col gap-2 '>
                  <div className='flex flex-row gap-2 '>
                    <MapPin className='my-auto'/> 
                    <div>
                        <p className=''>{experience?.education_place}</p>
                    </div>
                  </div>
                  <div className='flex flex-row gap-2 '>
                        <Calendar/> 
                        <p> {experience?.education_time} </p> 
                  </div>
              </div>
          </div>
          <div className='flex-1 bg-softened p-2 rounded-xl '>
              <p className='text-prim'>
                {experience?.learningPath}
              </p>
          </div>
        </div>
      </div>
      {/* EXPERIENCE */}
      <div className='flex flex-col gap-8'>
        <h4 className='text-center  flex flex-row gap-2'><Briefcase/> Experience</h4>
        <div className='text-justify bg-muted_pale flex  flex-col mt:flex-row-reverse gap-8 w-[90%]  mx-auto mt:w-full border-2 border-text p-12'>
          <div className='flex flex-row mt:flex-col gap-4 w-[25rem] my-auto'>
              <div>
                <h2 className='text-4xl  font-bold text-start'> {experience?.working_role} </h2>
              <p> {experience?.college} </p>
              </div>
              <div className='flex flex-col gap-2 '>
                  <div className='flex flex-row gap-2 '>
                    <MapPin className='my-auto'/> 
                    <div>
                      
                        <p className=''> {experience?.work_place} </p>
                    </div>
                  </div>
                  <div className='flex flex-row gap-2 '>
                        <Calendar/> 
                        <p> {experience?.working_time}</p> 
                  </div>
              </div>
          </div>
          <div className='flex-1 bg-softened p-2 rounded-xl'>
              <p className='text-[#eaeaea]'>
                {experience?.work}
              </p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Experience;