import { Facebook, Github, Instagram, Linkedin,  LucideFileSliders,  MailIcon,  MapPinIcon, Phone, Twitter, } from 'lucide-react'
// import { set } from 'mongoose';
import React from 'react'
// import { log } from 'three';
// import { post } from '../../../Backend/Routes/dataRoutes';

const Contactme = ({ data }) => {
  
  // backend data hooks 
  
  const [userData , setUserData ] = React.useState([])
  const contactMeData = userData[0]?.contactMe;
  const linkData = userData[0]?.links;
  
  React.useEffect(()=>{
     setUserData(data);
  },[data]);
  // user data collection hooks 

  const [getData , setGetData] = React.useState({
    name : "" ,
    email : "" , 
    contactNumber : "", 
    subject : "" , 
    message : ""
  })

  const [error , setError] = React.useState({});
  console.log(error);
  
  const handleValidation =  (e) => {  

    const {name , value } = e.target;

    setGetData((prev)=>({
      ...prev , [name] : value
    }));

  }


const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.length < 3) return "Name must be at least 3 characters";
        break;

      case "email":
        if (!value) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Invalid email address";
        break;

      case "contactNumber":
        if (!value) return "Contact number is required";
        if (!/^\d{10}$/.test(value))
          return "Contact number must be 10 digits";
        break;

      case "subject":
        if (!value) return "Subject is required";
        break;

      case "message":
        if (!value) return "Message is required";
        if (value.length < 10)
          return "Message must be at least 10 characters";
        break;

      default:
        return "";
    }
    return "";
  };


  const validateForm = () => {

    const newerror = {
    };

    Object.entries(getData).forEach((field)=>{
      const  error = validateField(field , getData[field]);
       
      if(error)  newerror[field] = error 

    });

    setError(newerror)
    return Object.keys(newerror).length === 0

  }

 const handleSubmit = async (e) => {

  try{

    
    e.preventDefault()
    
    if(!validateForm()) return ; 
  

    const response = await fetch("http://localhost:5000/api/contactdata",{
      method : "POST",
      headers :{
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(getData)
    })

    const data = await response.json()
    console.log(data);
    
    
  }catch(error){
    console.error("Error while sending data :", error);
    
  }

  

 }
  
  

  const Icons = {
    Email : MailIcon ,
    Phone : Phone ,
    Location : MapPinIcon , 
    Field : LucideFileSliders
  }

    const link_icons = {

      Linkedin: Linkedin,
      Github: Github,
      Instagram: Instagram,
      Phone: Phone,
      X: Twitter,
      Facebook :Facebook  
      }

  return <div id='contactme' className='mt-20 '>
          {/* heading */}
          <h2 className='text-soft_coal mini:text-2xl '>Contactme</h2>
          <div className='flex flex-col mini:gap-4  mt:flex-row justify-evenly w-[92%] mx-auto mt-12 '>

            {/* contact information box  */}
            <div className='border-2 border-mblk mx-auto w-[95%] mt:w-[50%]  bg-muted_pale  p-4 h-fit ' >
                <h4 className='py-2 font-bold mini:text-xl '> {contactMeData?.title1}</h4>
                <div className='flex flex-col gap-8 justify-between h-[100%] ' >

                    {/* about me message */}
                    <div className='mt-2 font-italic mini:text-sm text-justify  ' >
                      {contactMeData?.content}
                    </div>
                
                    <div className='grid mt:grid-cols-2 grid-cols-1 w-[99%] gap-2 mx-auto  '>
                        {contactMeData?.about?.map((value , index )=>{

                          const Icon = Icons[value.label]
                          return(
                              <div className='  mini:py-1 border-2 basis-full pl-2  flex flex-row gap-2 bg-softened' key={index}>
                                <div className='my-auto text-text2'>
                                { Icon && <Icon/>}
                                </div>
                                <div className='flex flex-col text-text2'>
                                  <h5 className='mini:text-xs'> {value.label}</h5>
                                  <p className='mini:text-xs'> {value.value}</p>
                                </div>
                              </div>
                          )
                        })}
                    </div>
                   
                    {/* social media link session */}
                  
                        <ul className='flex flex-row mini:gap-8 ml-2'>
                        {linkData && linkData.map((item , index)=>{
                                   const Icon = link_icons[item.name]
                          return(

                            <li key={index}><a href={item.url} rel='noreferrer' target='_blank'> {Icon && <Icon/>}</a></li>
                          )
                        })}
                      
                        </ul>
                     
                  </div>

            </div>
            {/* message box via whatsapp */}
            <div className='flex justify-start mx-auto flex-col w-[95%] mt:w-[40%] border-2   p-4 bg-muted_pale border-coal_gray '>
               <h4 className='text-text font-semibold  mini:text-xl  '>{contactMeData?.title2}</h4>
               <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 mt-4 '>
                  <div className='w-full'>
                    <label htmlFor="name" className='mini:font-medium mini:text-sm  text-text' >Name : </label>
                    <input
                    id='name' 
                    type="text" 
                    name = "name"
                    value={getData.name}
                    onChange={handleValidation}
                    className='border-2 text-text bg-muted_pale border-text w-full h-[2.4rem]' 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className='mini:font-medium mini:text-sm text-text'>E-Mail :</label>
                    <input 
                    id='email' 
                    type="email"
                    name = "email"
                    value={getData.email} 
                   
                    onChange={handleValidation}
                    className='border-2 text-text bg-muted_pale border-text w-full h-[2.4rem]' 
                    />
                  </div>
                  <div>
                    <label htmlFor="contactnumber" className='mini:font-medium mini:text-sm text-text '>Contact Number :</label>
                    <input 
                    id='contactNumber' 
                    type="number"
                    name = "contactNumber"
                    value={getData.contactNumber}
                    onChange={handleValidation}
                    className='border-2 text-text bg-muted_pale border-text w-full h-[2.4rem]' 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className='mini:font-medium mini:text-sm text-text'>Subject :</label>
                    <input 
                    id='subject' 
                    type="text" 
                    name = "subject"
                    value={getData.subject}
                    onChange={handleValidation}
                    className='border-2 text-text bg-muted_pale border-text w-full h-[2.4rem]' 
                     />
                  </div>
                  
                  <div>
                    <textarea  
                    id="contactmessage " 
                    name = "message"
                    className='border-2 text-text font-bold text-md bg-muted_pale border-text w-full h-36' 
                    value={getData.message}
                    onChange={handleValidation}/>

                  </div>
                  <div>
                    <button className=' mini:text-sm w-full hover:bg-text  bg-softened text-text2 hover:text-prim  h-10 rounded-lg ' >
                      Send Message 
                    </button>
                  </div>
               </form>
            </div>
          </div>
 
  </div>
}

export default Contactme;