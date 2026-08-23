import { useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const navbarRef = useRef(null)

  useEffect(()=>{
    const handleNavbar = ()=>{
      if(!navbarRef.current) return;
      if (window.scrollY > 50) {
        navbarRef.current.classList.add(styles.scrolled);
      } else {
        navbarRef.current.classList.remove(styles.scrolled);
      }
    }

    window.addEventListener("scroll",handleNavbar);

    return()=>(
      window.removeEventListener("scroll",handleNavbar)
    )
  },[])

 

  
  return (
    <div>
      <nav  ref={navbarRef} className={`${styles.navbar}`}>
        <div className={styles.logo}>
          <h2>Sathish Kumar R</h2>
        </div>
        <div className={ `${styles.navicons}`}> 
        <ul className={styles.navLinks}>
         <li><a href="#Home">Home</a></li>
         <li><a href="#About">About Me </a></li>
         <li><a href="#Skills">Skills</a></li>
         <li><a href="#Experience">Experience</a></li>
         <li><a href="#Projects">Projects</a></li>
         <li><a href="#Services">Services</a></li>
         <li><a href="#Contact">Contact</a></li>
        </ul>
        <div className={`${styles.cvButton}`}>
           <button > Download CV </button>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
