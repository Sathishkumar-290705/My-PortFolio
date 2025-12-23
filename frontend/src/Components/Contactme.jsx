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
  
  

  React.useEffect(()=>{
     setUserData(data);
  },[data]);

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
          <h3>Contactme</h3>
          <div className='flex flex-row justify-evenly w-[98%] mx-auto mt-12 h-full'>

            {/* contact information box  */}
            <div className='border-2 border-mblk w-[50%]  p-4 min-h-80 max-h-96' >
                <h4 className='py-2'> {contactMeData?.title1}</h4>
                <div className='flex flex-col justify-around h-[90%]' >
                    {/* about me message */}
                    <div className='mt-2 font-italic ' >
                      {contactMeData?.content}
                    </div>
             <div className='grid grid-cols-2  w-[99%] gap-2 mx-auto   '>
                {contactMeData?.about?.map((value , index )=>{

                  const Icon = Icons[value.label]
                  return(
                      <div className='border-2 basis-full pl-2  flex flex-row gap-2 ' key={index}>
                        <div className='my-auto'>
                        { Icon && <Icon/>}
                        </div>
                        <div className='flex flex-col '>
                          <h5> {value.label}</h5>
                          <p> {value.value}</p>
                        </div>
                      </div>
                  )
                })}
                    </div>
                    {/* contact information   */}
                   
                    {/* social media link session */}
                      <div >
                        <ul className='flex flex-row gap-[4rem] ml-2'>
                        {linkData && linkData.map((item , index)=>{
                                   const Icon = link_icons[item.name]
                          return(

                            <li key={index}><a href={item.url} rel='noreferrer' target='_blank'> {Icon && <Icon/>}</a></li>
                          )
                        })}
                      
                        </ul>
                      </div>
                  </div>

            </div>
            {/* message box via whatsapp */}
            <div className='flex justify-start flex-col w-[40%] border-2 min-h-96 p-4'>
               <h4>{contactMeData?.title2}</h4>
               <form onSubmit={handleSubmit} className='w-full flex flex-col gap-2 mt-2 '>
                  <div className='w-full'>
                    <label htmlFor="name" className='font-bold' >Name : </label>
                    <input
                    id='name' 
                    type="text" 
                    name = "name"
                    value={getData.name}
                    onChange={handleValidation}
                    className='border-2 text-prim bg-coal_gray border-text w-full h-[2.4rem]' 
                    placeholder='Your Name '/>
                  </div>
                  <div>
                    <label htmlFor="email" className='font-bold '>E-Mail :</label>
                    <input 
                    id='email' 
                    type="email"
                    name = "email"
                    value={getData.email} 
                   
                    onChange={handleValidation}
                    className='border-2 text-prim bg-coal_gray border-text w-full h-[2.4rem]' 
                    placeholder=' Your E-Mail' />
                  </div>
                  <div>
                    <label htmlFor="contactnumber" className='font-bold '>Contact Number :</label>
                    <input 
                    id='contactNumber' 
                    type="number"
                    name = "contactNumber"
                    value={getData.contactNumber}
                    onChange={handleValidation}
                    className='border-2 text-prim bg-coal_gray border-text w-full h-[2.4rem]' 
                    placeholder='Your Contact Number ' />
                  </div>
                  <div>
                    <label htmlFor="subject" className='font-bold'>Subject :</label>
                    <input 
                    id='subject' 
                    type="text" 
                    name = "subject"
                    value={getData.subject}
                    onChange={handleValidation}
                    className='border-2 text-prim bg-coal_gray border-text w-full h-[2.4rem]' 
                    placeholder='Subject' />
                  </div>
                  
                  <div>
                    <textarea  
                    id="contactmessage " 
                    name = "message"
                    className='border-2 text-prim bg-coal_gray border-text w-full h-36' 
                    placeholder='Enter your message...' value={getData.message}
                    onChange={handleValidation}/>

                  </div>
                  <div>
                    <button className=' border-2 border-mblk w-full bg-mblk text-prim hover:bg-prim hover:text-mblk h-10 rounded-lg ' >
                      Send Message 
                    </button>
                  </div>
               </form>
            </div>
          </div>
 
  </div>
}

export default Contactme;