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
  <div id='home' className='w-[92%] h-[700px] flex flex-col mt:flex-row  desk:mt-20 mt-24 mx-auto  justify-evenly items-center gap-8  '>

    {/* <Canvas style={{ width: "1200px", height: "1200px" , border : "50%"  }}>
     <ambientLight intensity={3} />
     <Logo />
    </Canvas> */}
    <div className='min-w-[25rem]' >
    <img src={pass_photo3} alt="my image "   className=' rounded-full w-[24rem]  sl:w[20rem] h-[24rem] sl:w-[20rem] '/>
    </div>
    
    <div className='flex flex-col  gap-4 max-w-[35rem]  mt-8'>
        <h1 className='text-soft_coal text-7xl text-[clamp(2.5rem,4vw,3.8rem)] font-bold leading-tight'>Hi, I'm <br /> {userData[0]?.home?.name} </h1>
        <h5 className='text-gray text-[clamp(1.5rem,4vw,2rem)] font-bold' > {userData[0]?.home?.role} </h5>
        <p className='text-soft_coal desk:text-lg sl:text-base text-justify '>{userData[0]?.home?.description}</p>

        <div className='flex flex-col gap-12' > 
        <div className='flex flex-row gap-4 mt-4 w-full' >
          <button className='border-2 px-2 py-2 rounded border-coal_gray w-full bg-softened text-prim font-bold '><a href="/Resume.pdf" target='_blank'> <p> Open CV </p></a> </button>
          <button className='border-2 px-2 py-2 rounded border-text w-full font-bold text-soft_coal'> <a href="/"> <p>Contact Me </p></a></button>
        </div>
        <div>
          

          <ul className='flex flex-row gap-16 ml-4' >
            {userData[0]?.links?.map((links,index)=>{
              const IconComponent = link_icons[links.name];
              return (
                <li  key={index} ><a href={links.url} rel='noreferrer' target='_blank'> { IconComponent && <IconComponent/>} </a></li>
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

