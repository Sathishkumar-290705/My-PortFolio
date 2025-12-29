import React from 'react'

const Project = ({data }) => {

const [userData , setUserData] = React.useState([]);

const projectData = userData[0]?.projects;

React.useEffect(() => {
  setUserData(data);
 
}, [data]);

  return <div id='projects' className='mt-20'>
    <h2 className='text-soft_coal'> My Projects </h2>
    <div className='mt-16 flex flex-wrap gap-12 justify-center ' >
      {/* PROJECT LIST  */}
      {
        projectData && projectData?.map((project,index)=>{
          return(
       <div className='mt:w-[26rem] max-w-[26rem] w-[80%] h-auto min-h-72 max-h-80  overflow-hidden border-2 border-text flex flex-col justify-between item-center bg-muted_pale p-4 '>
    
          <h4 className='text-text h-12 font-bold my-auto flex  items-center'> {project.title}</h4>
         <div className='flex flex-col justify-between flex-1 mt-4 '>
          <p className='text-text min-h-20'>{project.description} </p>
         
            <ul className='flex flex-row flex-1  flex-wrap gap-4 items-start h-auto'>
            {
              project.technologies && project.technologies.map((tech,index)=>{
                return (
                  <li  key={index} className='text-text text-sm bg-softened w-fit px-4 py-2 rounded-full text-text2  hover:bg-text hover:text'>{tech}</li>
                )
              })
            }
            </ul>
         
            <button  className='flex items-center font-semibold h-12'>
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