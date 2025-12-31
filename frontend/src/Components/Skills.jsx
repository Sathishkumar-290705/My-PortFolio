import { Brain,  Cpu,  Database,  Handshake, Monitor,  Server, Sparkles, } from 'lucide-react'
import React from 'react'

const Skills = ({ data }) => {

   const [userData , setUserData] = React.useState([]);
   const skills = userData[0]?.skills;

   React.useEffect(() => {
     setUserData(data); 

      },[data]);

     const icons = {
        "Frontend" : Monitor,
        "Backend" : Server,
        "AI/ML" : Brain, 
        "Database" : Database,  
        "DevOps and Tools" : Cpu,
        "Soft Skills" : Handshake,
        "Other Skills" : Sparkles 
     }
      


  return <div id='skills' className='mt-24 '>
    <h2 className='text-soft_coal mini:text-2xl '>My Skills </h2>
    <div className=' flex flex-wrap justify-center w-[90%] mini:px-0 px-12 gap-y-8 gap-x-20 mt-8 w-fit mx-auto' >
        {/* skills  */}

        {
          skills && skills?.map((skill,index)=>{
            const Icon = icons[skill.title]
            return (
        <div  className='relative flex flex-col p-4 bg-muted_pale w-[90%]  mini:min-h-68 mini:w-[80%] np:w-[24rem] border-2 border-text'key={skill._id} >
         
            <h4 className="flex flex-row mini:text-base   gap-2 items-center mx-auto text-text mini:font-bold ">{Icon && <Icon/>} {skill.title} </h4>
            <div className='mt-4'>
                  {skill.items && skill.items?.map((item,index)=>{  
                    return (
                  <ul className='flex flex-col gap-2' key={index}>
                    <li className='mt-2 text-text mini:text-xs  '> <span> ➤ </span> {item}</li>
                  
                  </ul>
                    )
                  })}
            </div>
         
        </div>
            )
          })
        }
        
    
       
       
    </div>
  </div>
  
}

export default Skills; 