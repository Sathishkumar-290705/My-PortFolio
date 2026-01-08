import { useEffect, useState } from 'react';
import sathish_profile_image_2 from '../Assets/sathish_profile_image_2.jpg'




const Home = ({data}) => {

  const [home,setHome]=useState([])
  useEffect(()=>{
    const home = data[0]?.home;
    setHome(home)
  })
  return (
    <section
      id="home"
      className=" min-h-screen px-10 py-12 bg-black"
    >
      <div className="mx-auto max-w-[90%] h-[85vh] rounded-3xl bg-gradient-to-br from-[#1b1b1b] to-[#0e0e0e] p-14 shadow-2xl">
        <div className="flex flex-row  justify-evenly  gap-12 items-center h-full">
          
          {/* LEFT */}
          <div className='mt-12'>
             <h1 className="text-5xl font-bold mb-6 text-white " > Hi , I am </h1>
            <h1 className="text-5xl font-bold mb-6 text-white ">
              {home?.name}
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-green-400 text-sm tracking-widest">
                {home?.role1}
              </span>
              <span className="text-gray-500 text-xs">|</span>
              <span className="text-gray-400 text-sm tracking-widest">
               {home?.role2}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-lg">
              {home?.description}
            </p>

            <div className="mt-10">
              {/* <p className="text-xs text-gray-500 tracking-widest mb-4">
                COMPANIES I'VE WORKED WITH
              </p> */}
                 <button
      className="
        px-8 py-3
        rounded-full
        text-indigo-400 font-medium
        bg-white/10
        border border-white/20
        backdrop-blur-md
        shadow-lg
        hover:bg-white/20
        hover:scale-105
        active:scale-95
        transition-all duration-300
      "
    >
       More 
    </button>

              {/* <div className="flex flex-wrap gap-6 text-gray-400 font-medium">
                <span>zepto</span>
                <span>Newton School</span>
                <span>meesho</span>
                <span>Procol</span>
                <span>skit.ai</span>
                <span>WheelsEye</span>
              </div> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end">
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src={sathish_profile_image_2}
                alt="profile"
                className="w-[300px] h-[420px] object-cover"
              />

              {/* <div className="absolute bottom-3 left-3 text-xs text-gray-300">
                WINDY HAIR
              </div> */}
              {/* <div className="absolute bottom-3 right-3 text-xs text-gray-300 border border-white/20 px-2 py-0.5 rounded">
                IMG
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
