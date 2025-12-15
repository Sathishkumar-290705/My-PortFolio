import { Github, Instagram, Linkedin, LocateIcon, LocationEdit, Mail, Map, MapPinIcon, Phone } from 'lucide-react'
import React from 'react'

const Contactme = () => {
  return <div className='mt-20 '>
          {/* heading */}
          <h3>Contactme</h3>
          <div className='flex flex-row justify-evenly w-[98%] mx-auto mt-12 h-full'>

            {/* contact information box  */}
            <div className='border-2 border-mblk w-[50%]  p-4 min-h-80 max-h-96' >
                <h4 className='py-2'> Contact Information </h4>
                <div className='flex flex-col justify-around h-[90%]' >
                    {/* about me message */}
                    <div className='mt-2 font-italic ' >
                      I’m open for freelance projects, internships, and part-time opportunities right now.
                      If you’re planning a project or need help taking an existing one further,
                      feel free to get in touch.
                    </div>

                    {/* contact information   */}
                    <div className='grid grid-cols-2  w-[99%] gap-2 mx-auto   '>
                     <div className='border-2 basis-1/3 pl-2 flex  flex-row  gap-2 ' >
                        <div className='my-auto'>
                          <Mail/>
                        </div>
                        <div className='flex flex-col '>
                            <h5>E-mail :</h5>
                            <p>sathishkumar290705@gmail.com</p>
                        </div>
                      </div>
                     <div className='border-2 basis-2/3 pl-2 flex flex-row gap-2 ' >
                        <div className='my-auto'>
                          <MapPinIcon />
                        </div>
                        <div className='flex flex-col '>
                            <h5>Location :</h5>
                            <p> Chennai , India </p>
                        </div>
                      </div>
                      
                      <div className='border-2 basis-full pl-2  flex flex-row gap-2 '>
                        <div className='my-auto'>
                          <Phone/>
                        </div>
                        <div className='flex flex-col '>
                          <h5> WhatsApp  :</h5>
                          <p>+91 8056663585</p>
                        </div>
                      </div>

                    </div>
                    {/* social media link session */}
                      <div >
                        <ul className='flex flex-row gap-[5.5rem] ml-2'>
                        <li><a href="https://www.linkedin.com/in/sathish-kumar-r-514070312/" target='_blank'><Linkedin/></a></li>
                        <li><a href="https://github.com/Sathishkumar-290705" target='_blank'><Github/></a></li>
                        <li><a href="https://www.instagram.com/sathishkumar_2907/" target='_blank' ><Instagram/></a></li>
                        <li><a href="" target='_blank'  ><Phone /> </a></li>
                        </ul>
                      </div>
                  </div>

            </div>
            {/* message box via whatsapp */}
            <div className='flex justify-start flex-col w-[40%] border-2 min-h-96 p-4'>
               <h4>Send me a message </h4>
               <form action="" className='w-full flex flex-col gap-2 mt-2 '>
                  <div className='w-full'>
                    <label htmlFor="name" className='font-bold'>Name : </label>
                    <input id='name' type="text" className='border-2 border-text w-full h-[2.4rem]' placeholder='Your Name '/>
                  </div>
                  <div>
                    <label htmlFor="email" className='font-bold '>E-Mail :</label>
                    <input id='email' type="email" className='border-2 border-text w-full h-[2.4rem]' placeholder=' Your E-Mail' />
                  </div>
                  <div>
                    <label htmlFor="contactnumber" className='font-bold '>Contact Number :</label>
                    <input id='contactnumber' type="number" className='border-2 border-text w-full h-[2.4rem]' placeholder='Your Contact Number ' />
                  </div>
                  <div>
                    <label htmlFor="subject" className='font-bold'>Subject :</label>
                    <input id='subject' type="text" className='border-2 border-text w-full h-[2.4rem]' placeholder='Subject' />
                  </div>
                  
                  <div>
                    <textarea  id="contactmessage " className='border-2 border-text w-full h-36' placeholder='Enter your message...'></textarea>
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