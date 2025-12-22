import React from 'react'

const Navbar = () => {
  return (
   <div className=''>
   <nav className=' fixed top-0 flex flex-row justify-between px-20 h-20 mt-0 bg-prim/90 text-text w-full  items-center border-b-2 border-b-text/90 '>
    <div className='flex flex-row'>
        <h2 className='text-text font-bold text-center'> Sathish </h2> &nbsp; <h2 className='text-blue-700 font-bold ' > Kumar </h2>
    </div>
    <div className='flex w-[38%] justify-between '>  
        <ul className='list-none  flex flex-row gap-4 items-center '>
            <li className='no-underline'><a href="" >Home</a></li>
            <li><a href="#home" className='no-underline'>About </a></li>
            <li><a href="#skills" className='no-underline'>Skills</a></li>
            <li><a href="#projects" className='no-underline'>Projects</a></li>
            <li><a href="#experience" className='no-underline'>Experience</a></li>
            <li><a href="#contactme" className='no-underline'>Contact </a></li>
        </ul>
        <div className='border-l-2 w-2 h-[3.5rem] border-text '>

        </div>
        <div className=''>
            <button className='px-4 py-4 bg-mblk rounded-lg text-prim hover:bg-text items-center  '> Download Resume </button>
        </div>
    </div>
   </nav>
   </div>
  )
}

export default Navbar;