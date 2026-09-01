import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

  const navbarRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

 

  
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
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        </div>
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
          <ul>
            {[
              ["Home", "#Home"],
              ["About Me", "#About"],
              ["Skills", "#Skills"],
              ["Experience", "#Experience"],
              ["Projects", "#Projects"],
              ["Services", "#Services"],
              ["Contact", "#Contact"],
            ].map(([label, href]) => (
              <li key={href}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
            ))}
          </ul>
          <button className={styles.mobileCv}>Download CV</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
