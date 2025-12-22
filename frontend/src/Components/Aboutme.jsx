import React from 'react'

const Aboutme = ({ data }) => {

  const [userData , setUserData] = React.useState([]);

  React.useEffect(() => {
    setUserData(data);
    // console.log(userData);
  }, [data]);

  const about = userData[0]?.aboutMe?.about;
  return  <div id='aboutme'>
  <h3> About Me  </h3>
 
  <div className='flex flex-row mt-8'>

   <div className=' w-[60%] p-4 text-justify '>
     <h4> Know More About Me </h4>
    <br/>
    
    {userData[0]?.aboutMe?.content?.map((item,index)=>{
      return (
        <div key={index}>
              <p  className='mb-4'> {item} </p>
              <br />
        </div>
      )
    })}

  <p> </p> <br />
      
   </div>

   <div className=' w-[40%] p-4 '>
   <br />
   <br />
     <div className='grid grid-rows-4 grid-cols-2 gap-8 '>

      {
        about && Object.entries(about).map(([key,value])=>{
          return (
      <div>
        <h5 className='font-bold '> {key}</h5>
        <p>{value}</p>
      </div>
          )
        })
      }

     
      
    </div>
   </div>
   
  </div>
  </div>

}
export default Aboutme;