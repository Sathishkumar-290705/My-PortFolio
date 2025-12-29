import { Briefcase, Cog, Download, DownloadIcon, FolderKanban, Home, Phone, User } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  return (
 
   <nav className=' fixed top-0 flex flex-row justify-between nl:px-0  h-24 mt-0 max-w-full      text-text w-full  items-center z-[1000] '>
    <div className='flex flex-row'>
        <h2 className='text-soft_coal font-bold text-center text-[clamp(0.8rem,2.0rem,2.4rem)] hidden lp:inline'> Sathish Kumar </h2>
    </div>
 
        <ul className='nav-icons flex sm:hidden max-w-fit w-[min(53%,44.5rem)] max-w-[47rem] border-2 border-gray shadow-4xl z-1000 px-2 py-1 rounded-full bg-muted_pale hover:bg-softened backdrop-blur-lg   hover:scale-105 transition duration-300 group list-none flex flex-row items-center  '>    


            <li className=' nav-item  '> <a href="home" className='flex flex-row gap-1' ><Home className='text-text'/><span className='hidden mt:inline'> Home </span></a>  </li>


            <li className=' nav-item '><a href="#aboutme" className='flex flex-row gap-1' ><User className='text-text' /> <span className='hidden mt:inline'> Aboutme </span> </a>  </li>


            <li className=' nav-item  '><a href="#skills" className='flex flex-row gap-1'><Cog className='text-text' /> <span className='hidden mt:inline'>Skills</span></a>  </li>


            <li className=' nav-item  '><a href="#projects" className='flex flex-row gap-1' ><FolderKanban className='text-text'/> <span className='hidden mt:inline'>Projects</span></a>  </li>


            <li className=' nav-item '><a href="#experience" className='flex flex-row gap-1'><Briefcase className='text-text'/> <span className='hidden mt:inline'>Experience</span></a>  </li>


            <li className=' nav-item '><a href="#contactme" className='flex flex-row gap-1' ><Phone className='text-text' /> <span className='hidden mt:inline'>Contact</span> </a>  </li>
        </ul>
   
        <div className=''>
            <button className='px-4 py-4 bg-m_text rounded-2xl text-prim hover:bg-text items-center  flex mr-2 '> <DownloadIcon/> <span className='hidden mt:inline'> Download CV </span></button>
        </div>
   </nav>
    
  ) 
}

export default Navbar;