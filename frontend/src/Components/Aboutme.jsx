import React from 'react'

const Aboutme = ({ data }) => {

  const [userData , setUserData] = React.useState([]);

  React.useEffect(() => {
    setUserData(data);
    // console.log(userData);
  }, [data]);

  const about = userData[0]?.aboutMe?.about;
  return  <div id='aboutme  '>
  <h2 className='text-soft_coal lp:mt-80  mt:mt-12'> About Me  </h2>
 
  <div className='flex flex-col desk:flex-row w-[92%] mx-auto mt-8 gap-2 px-12 '>
    <div className='desk:w-[1700px] w-full'>
     <h3 className='font-semibold  text-muted_soft pl-4 text-center mt:text-start'> Know More About Me </h3>
   <div className='  p-4 text-justify border-2 rounded-xl bg-muted_pale mt-4'>
    <br/>
    
    {userData[0]?.aboutMe?.content?.map((item,index)=>{
      return (
        <div key={index}>
              <p  className='mb-4 text-text  text-base'> {item} </p>
              <br />
        </div>
      )
    })} 
   </div>
    </div>
   <div className=' desk:w-flex-1 w-full flex flex-col '>
   <div className='h-[460px] h-auto p-4 border-2 rounded-xl mt-12 bg-softened' >
  
     <div className='grid lp:grid-rows-4 lp:grid-cols-2 grid-rows-8 grid-cols-1 lp:gap-y-2 gap-y-2  '>

      {
        about && Object.entries(about).map(([key,value])=>{
          return (
      <div className='bg-softened p-0  w-40'>
        <h5 className='font-bold text-prim mt:text-base text-xs  '> {key}</h5>
        <p className='text-text2  mt:text-base text-xs'>{value}</p>
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