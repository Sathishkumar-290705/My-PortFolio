import React from 'react'

const Aboutme = ({ data }) => {

  const [userData , setUserData] = React.useState([]);

  React.useEffect(() => {
    setUserData(data);
    // console.log(userData);
  }, [data]);

  const about = userData[0]?.aboutMe?.about;
  return  <div id='aboutme  mini:mt-20 '> 
  <h2 className='text-soft_coal mini:text-3xl  nl:text-3xl mini:mt- sp:mt-40  mt:mt-16 np:mt-20 lp:mt-12  nl:mt-20'> About Me  </h2>
 
  <div className='flex flex-col nl:flex-row  w-[92%] mx-auto mt-8 gap-2 mini:px-2 px-12 '>
    <div className='desk:w-[1700px] w-full'>
     <h3 className='font-semibold mini:text-xl nl:text-2xl   text-muted_soft pl-4 text-start'> Know More About Me </h3>
   <div className='  p-4 text-justify border-2 rounded-xl bg-muted_pale mt-4'>
    <br/>
    
    {userData[0]?.aboutMe?.content?.map((item,index)=>{
      return (
        <div key={index}>
              <p  className='mb-4 nl:mb-2 text-text mini:text-sm mt:text-sm nl:text-base text-base'> {item} </p>
              <br />
        </div>
      )
    })} 
   </div>
    </div>
   <div className=' desk:w-flex-1 w-full flex flex-col gap-4 '>
   <div className=' h-auto  p-4 border-2 rounded-xl mt-12 bg-softened' >
  
     <div className='grid lp:grid-rows-4 lp:grid-cols-2 grid-rows-8 grid-cols-1 lp:gap-y-2 nl:gap-y-16 nl:p-2  gap-y-4  '>

      {
        about && Object.entries(about).map(([key,value])=>{
          return (
      <div className='bg-softened p-0  w-40'>
        <h5 className='font-bold text-prim mt:text-sm mini:text-xs  '> {key}</h5>
        <p className='text-text2  mt:text-sm mini:text-xs'>{value}</p>
      </div>
          )
        })
      }
    </div>
   </div>
   <div className='h-fit p-4 border-2 rounded-xl mt-2 bg-softened ' >
    <p className='text-text2 text-justify mini:text-sm mt:text-sm nl:text-base'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos recusandae tempore odio totam! Accusamus illo fuga totam quos autem quae, corporis aut ea quibusdam. Ipsam necessitatibus earum soluta optio.</p>
   </div>
  </div>
   
  </div>
  </div>

}
export default Aboutme;