import React  from 'react'
import { useEffect , useState , useRef} from 'react';

 export default function RevealToScroll({children }) {


    const [visible,setVisible]= useState (false);
    const ref = useRef(null);

    useEffect (()=>{
      const observer = new IntersectionObserver(
        ([entry])=>{
          if(entry.isIntersecting){
            setVisible (true);
            observer.disconnect();
          }
        },{threshold:0.1}
      )

      if (ref.current){
        observer.observe(ref.current);
      }

      return ()=> observer.disconnect();  
    },[]);
      return React.cloneElement(children, { ref, className: `${children.props.className} transition-all duration-800 ease-in-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}` });
  
     

}

