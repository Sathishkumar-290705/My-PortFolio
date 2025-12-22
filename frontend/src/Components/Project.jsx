import React from 'react'

const Project = ({data }) => {

const [userData , setUserData] = React.useState([]);

const projectData = userData[0]?.projects;

React.useEffect(() => {
  setUserData(data);
 
}, [data]);

  return <div id='projects' className='mt-20'>
    <h3> My Projects </h3>
    <div className='mt-16 flex flex-wrap gap-12 justify-center ' >
      {/* PROJECT LIST  */}
      {
        projectData && projectData?.map((project,index)=>{
          return(
       <div className='w-[28rem] h-96 max-h-96  overflow-hidden border-2 border-text flex flex-col'>
        <div className='basis-40'>
          {/* <img src="jiofwo" alt="" /> */}
        </div>
        <div className='flex-1 flex justify-around flex-col p-4 '>
          <h4> {project.title}</h4>
          <div>
          <p>{project.description} </p>
          <div className='mt-2'>
            <ul className='flex flex-row flex-wrap gap-4'>
            {
              project.technologies && project.technologies.map((tech,index)=>{
                return (
                      <li  key={index} >{tech}</li>
                    )
                  })
                }
            </ul>
            
          </div>
          </div>
            <button  className='flex '>
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