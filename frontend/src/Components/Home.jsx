import React, { useEffect , useState } from 'react'
// import pass_photo from '../Assets/pass_photo.jpg';
import pass_photo3 from '../Assets/pass_photo3.jpg';
import {Facebook, Github, Instagram, Linkedin, Phone, Twitter,} from 'lucide-react'
// import axios from 'axios';
// import { useRef } from 'react';
// import Resume from './Resume.pdf'
// import {useFrame , Canvas, useLoader } from '@react-three/fiber';
// import { TextureLoader } from 'three';
// import { Loader } from 'three';



export default function Home({data}) {

    const [userData , setUserData] = useState([]);

    
    useEffect(() => {
      setUserData(data);
      // console.log(userData);
    }, [data]);

      const link_icons = {

      Linkedin: Linkedin,
      Github: Github,
      Instagram: Instagram,
      Phone: Phone,
      X: Twitter,
      Facebook :Facebook  
      }

   

  return <>
  <div id='home' className='w-[98%] h-[700px] flex mx-auto mt-20  flex justify-evenly items-center gap-12 '>

    {/* <Canvas style={{ width: "1200px", height: "1200px" , border : "50%"  }}>
     <ambientLight intensity={3} />
     <Logo />
    </Canvas> */}
    <div >
    <img src={pass_photo3} alt="my image "  width={400} height={400} className=' rounded-full  '/>
    </div>
    
    <div className='flex flex-col gap-4 max-w-[40rem] '>
        <h1>Hi, I'm <br /> {userData[0]?.home?.name} </h1>
        <h2 className='text-gray' > {userData[0]?.home?.role} </h2>
        <p>{userData[0]?.home?.description}</p>

        <div className='flex flex-col gap-12' >
        <div className='flex flex-row gap-4 mt-4 w-full' >
          <button className='border-2 px-2 py-2 rounded border-text w-full'><a href="/Resume.pdf" target='_blank'> <p> Resume </p></a> </button>
          <button className='border-2 px-2 py-2 rounded border-text w-full'> <a href="/"> <p>Contact Me </p></a></button>
        </div>
        <div>
          

          <ul className='flex flex-row gap-16 ml-4' >
            {userData[0]?.links?.map((links,index)=>{
              const IconComponent = link_icons[links.name];
              return (
                <li  key={index} ><a href={links.url} target='_blank'> { IconComponent && <IconComponent/>} </a></li>
              )
            })}
                </ul>
        </div>
        </div>
    </div>
  </div>
  </>
}




// const Logo = () => {

//   const meshref = useRef();
//   const texture = useLoader(TextureLoader, pass_photo3)

//     useFrame(()=>{
      
//     })

//   return(
//     <mesh ref={meshref} >
//        <planeGeometry args={[3, 3]} />
//       <meshStandardMaterial map={texture} transparent />
//     </mesh>
//   )

// }

