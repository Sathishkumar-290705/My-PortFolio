import React from 'react'

const Project = ({data }) => {

const [userData , setUserData] = React.useState([]);

const projectData = userData[0]?.projects;

React.useEffect(() => {
  setUserData(data);
 
}, [data]);

  return <div id='projects' className='mt-20'>
    <h2 className='text-soft_coal mini:text-2xl nl:text-3xl'> My Projects </h2>
    <div className='mt-16 mini:w-[96%] np:w-[90%] flex flex-wrap gap-12 justify-center mx-auto' >
      {/* PROJECT LIST  */}
      {
        projectData && projectData?.map((project,index)=>{
          return(
       <div className='mt:w-[24rem]  min-h-80 max-h-88  max-w-[24rem] mini:w-[90%] sp:w-[88%] sp:min-h-[18rem] np:w-[80%] mini:min-h-72 h-fit lp:w-[20rem] overflow-hidden border-2 border-text flex flex-col justify-between item-center bg-muted_pale p-4 '>
    
          <h4 className=' mini:text-xl text-text h-12 font-bold my-auto flex  items-center'> {project.title}</h4>
         <div className='flex flex-col justify-between flex-1 mt-4 '>
          <p className=' mini:text-xs nl:text-sm  text-text min-h-20'>{project.description} </p>
         
            <ul className='flex flex-row flex-1  flex-wrap gap-2 items-start h-auto'>
            {
              project.technologies && project.technologies.map((tech,index)=>{
                return (
                  <li  key={index} className=' mini:text-xs text-text   bg-softened w-fit px-4 mini:px-2 mini:py-2 rounded-full text-text2  hover:bg-text hover:text'>{tech}</li>
                )
              })
            }
            </ul>
         
            <button  className='flex justify-start items-center font-semibold h-12'>
               View Project 
            </button>
        </div>
        </div>
   
          )
        })
      }
    </div>
  </div>
}

export default Project;