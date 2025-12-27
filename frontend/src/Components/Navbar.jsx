import React from 'react'

const Navbar = () => {
  return (
   <div className=''>
   <nav className=' fixed top-0 flex flex-row justify-around px-0 h-24 mt-0  text-text w-full  items-center z-[1000] '>
    <div className='flex flex-row'>
        <h2 className='text-soft_coal font-bold text-center'> Sathish Kumar </h2>
    </div>
    <div className='flex  gap-8   justify-between border-2 px-4 py-2 rounded-full '>  
        <ul className='nav-icons list-none flex flex-row gap-4 items-center  '>
            <li className=' nav-item group  '><a href="home" >Home</a>  </li>
            <li className=' nav-item group'><a href="#aboutme" >About </a>  </li>
            <li className=' nav-item group  '><a href="#skills"  >Skills</a>  </li>
            <li className=' nav-item group  '><a href="#projects" >Projects</a>  </li>
            <li className=' nav-item group'><a href="#experience" >Experience</a>  </li>
            <li className=' nav-item group'><a href="#contactme" >Contact </a>  </li>
        </ul>
        {/* <div className='border-l-2 w-2 h-[3.5rem] border-text '/> */}
    </div>
        <div className=''>
            <button className='px-4 py-4 bg-m_text rounded-full text-prim hover:bg-text items-center  '> Download Resume </button>
        </div>
   </nav>
   </div>  
  )
}

export default Navbar;