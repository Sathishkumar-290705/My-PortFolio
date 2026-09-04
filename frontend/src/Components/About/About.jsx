import styles from "./About.module.css";
import profile from '../../Assets/sathish_profile_image_2.jpg';
import { useEffect, useState } from "react";
// import profileImg from "../../assets/about-profile.jpg"; // replace with your image

const About = ({ data }) => {

  const [aboutData,setaAboutData] = useState()

  const aboutdata = data[0]?.aboutMe;
  
  useEffect(()=>{
    setaAboutData(aboutdata);
    
  }, [data]);

  return (
    <div className={styles.container} id="About">
      <section className={styles.about}>
        {/* Left Image */}
        <div className={styles.imageSection}>
          <img src={profile} alt="About profile" />
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h1 className={`${styles.heading} about_heading`}>
            {/* {aboutData && aboutData?.title }  */}
            "Who I Am"
          </h1>

          {aboutData && aboutData?.content.map((item,index)=>(
          
            <p className={styles.para} key={index}>{item}</p>
    
          )) }

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Resume</button>
            <button className={styles.secondaryBtn}>LinkedIn</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
