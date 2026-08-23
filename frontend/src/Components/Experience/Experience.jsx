import { Briefcase, GraduationCap } from "lucide-react";
import styles from "./Experience.module.css";
import { useEffect, useState } from "react";

const experiences = {
  Experience : [
     {
    role: "Frontend Developer",
    company: "Velammal Engineering College,chennai",
    duration: "March 2025 – Current",
    description:
      "Transforming complex 360° capture workflows into intuitive, end-to-end product experiences for the GoCapture app.",
  }

  ] , 
  "Learning Path" : [
     {
    role: "Bachelor of Technology in Artificial intelligence and data Science",
    company: "Velammal Engineering college, chennai",
    duration: "September 2023 – Current",
    description:
      "Transforming complex 360° capture workflows into intuitive, end-to-end product experiences for the GoCapture app.",
  }
  ]
}

const Icons = {
  Experience : Briefcase , 
  "Learning Path" : GraduationCap
}

const Experience = ({ data }) => {

  const[professionalData,setProfessionalData] = useState();

  useEffect(()=>{
    if(data){
       setProfessionalData(data[0]?.professional);
       console.log("sathish",professionalData);
       
    }
  },[data])
  return (
    <section className={styles.container} id="Experience">
   
        
     
      <div className={styles.list}>
        {professionalData && Object.entries(professionalData)?.map(([key, value],index) => {
           
           const Icon = Icons[key]
          return (

            <div>
          <h1 className={styles.listheading}> <Icon  className="w-8 h-8" /> {key}</h1>
          <div className={styles.listcontainer}>
          { value && value.map((items,value)=>(
             <div>
        <div key={index} className={styles.item}>
            <div className={styles.left}>
              <h3>
                {items.role} &nbsp; <span>@ {items.company}</span>
              </h3>
              <p>{items.description}</p>
            </div>

            <div className={styles.right}>{items.duration}</div>
          </div>
            </div>
           ))}
          </div>
           </div>
          )

       })}
      </div>
    </section>
  );
};

export default Experience;





