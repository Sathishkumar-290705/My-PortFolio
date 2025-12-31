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
  <div id='home' className='w-[92%] max-h-[700px] lp:h-[500px] flex flex-col st:flex-row mini:mt-28 st:mt-0 lp:mt-20 desk:mt-20 mt-24 mx-auto mini:justify-start  justify-evenly items-center  mini:gap-0 lp:gap-0 st:gap-4  '>

    {/* <Canvas style={{ width: "1200px", height: "1200px" , border : "50%"  }}>
     <ambientLight intensity={3} />
     <Logo />
    </Canvas> */}
    <div className='max-w-[30rem]' >
    <img src={pass_photo3} alt="my image "   className=' rounded-full mini:w-[10rem] mini:h-[10rem] st:w-[16rem] st:h-[16rem] lp:w-[10rem] lp:h-[10rem] desk:w-[30rem] desk:h-[30rem] nl:w-[28rem] nl:h-[28rem]    '/>
    </div>
    
    <div className='flex flex-col  mini:gap-2  lp:gap-2 mini:w-90%  st:w-[60%] nl:w-[30rem] sl:w-[35rem] lp:w-[80%] desk:w-[40rem]  mini:mt-0 lp:mt-2'>
        <h1 className='text-soft_coal  text-[clamp(2.5rem,4vw,3.8rem)] mini:text-2xl lp:text-2xl  font-bold leading-tight'>Hello, <br /> I'm  {userData[0]?.home?.name} </h1>
        <h5 className='text-gray text-[clamp(1.2rem,3vw,2.2rem)] mini:text-xl lp:text-xl font-bold  ' > {userData[0]?.home?.role} </h5>
        <p className='text-soft_coal mini:text-xs desk:text-lg  sl:text-base st:text-sm lp:text-xs text-justify '>{userData[0]?.home?.description}</p>

        <div className='flex flex-col gap-12 mini:gap-8' > 
        <div className='flex flex-row gap-4 mt-4 w-full' >
          <button className='border-2 px-2 py-2 rounded border-coal_gray w-full bg-softened text-prim font-bold '><a href="/Resume.pdf" target='_blank'> <p className=' mini:text-xs lp:text-xs' > Open CV </p></a> </button>
          <button className='border-2 px-2 py-2 rounded border-text w-full font-bold text-soft_coal'> <a href="/"> <p className=' mini:text-xs lp:text-xs'>Contact Me </p></a></button>
        </div>
        
          

          <ul className='flex flex-row mini:gap-12 gap-16 ml-4' >
            {userData[0]?.links?.map((links,index)=>{
              const IconComponent = link_icons[links.name];
              return (
                <li  key={index} ><a href={links.url} rel='noreferrer' target='_blank' > { IconComponent && <IconComponent className='lp:text-xs' />} </a></li>
              )
            })}
                </ul>
      
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

