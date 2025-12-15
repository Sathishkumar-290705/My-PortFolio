import { ArrowBigUp, Scroll } from 'lucide-react'
import React from 'react'
import RevealToScroll from './RevealToScroll'

const ScrollToTop = () => {

 const [visible,setVisible]= React.useState (false);

  React.useEffect (()=>{
     const scrollDown = ()=>{
        if (window.scrollY >300){
          console.log('helo ');
          setVisible (true);
        }else{
          setVisible (false);
        }
     }

   
     window.addEventListener ('scroll',scrollDown);

     return ()=> window.removeEventListener ('scroll',scrollDown);
  },[]);



  return <div >
    <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className={`
    bottom-16 right-16 z-50 border-2 rounded-full
    w-16 h-16 flex justify-center items-center
    bg-text/20 hover:bg-text/50 cursor-pointer
    transition-all duration-500 ease-out
    ${visible ? ' fixed  opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'}
  `}
>
  <ArrowBigUp className="w-8 h-8" />
</button>

  </div>
  
}

export default ScrollToTop;