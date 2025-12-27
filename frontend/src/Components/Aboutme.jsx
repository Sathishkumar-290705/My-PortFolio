import React from 'react'

const Aboutme = ({ data }) => {

  const [userData , setUserData] = React.useState([]);

  React.useEffect(() => {
    setUserData(data);
    // console.log(userData);
  }, [data]);

  const about = userData[0]?.aboutMe?.about;
  return  <div id='aboutme px-8'>
  <h2 className='text-soft_coal'> About Me  </h2>
 
  <div className='flex flex-row mt-8 gap-2 px-12'>
    <div className='w-[60%]'>
     <h3 className='font-semibold  text-muted_soft pl-4'> Know More About Me </h3>
   <div className='  p-4 text-justify border-2 rounded-xl bg-muted_pale mt-4'>
    <br/>
    
    {userData[0]?.aboutMe?.content?.map((item,index)=>{
      return (
        <div key={index}>
              <p  className='mb-4 text-text  text-lg'> {item} </p>
              <br />
        </div>
      )
    })}
   </div>
    </div>
   <div className=' w-[40%] flex flex-col '>
   <div className='h-[460px] h-auto p-4 border-2 rounded-xl mt-12 bg-softened' >
  
     <div className='grid grid-rows-4 grid-cols-2 gap-8 '>

      {
        about && Object.entries(about).map(([key,value])=>{
          return (
            <div className='bg-softened p-1'>
        <h5 className='font-bold text-prim '> {key}</h5>
        <p className='text-text2 '>{value}</p>
      </div>
          )
        })
      }
    </div>
   </div>
   <div className='h-fit p-4 border-2 rounded-xl mt-2 bg-softened ' >
    <p className='text-text2 text-justify '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos recusandae tempore odio totam! Accusamus illo fuga totam quos autem quae, corporis aut ea quibusdam. Ipsam necessitatibus earum soluta optio.</p>
   </div>
  </div>
   
  </div>
  </div>

}
export default Aboutme;