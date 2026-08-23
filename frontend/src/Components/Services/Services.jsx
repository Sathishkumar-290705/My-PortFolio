import { Layout, Globe, Zap, Plus } from "lucide-react";
import styles from "./Services.module.css";
import { useEffect, useState } from "react";

const Services = ({data}) => {

  const [serviceData,setServiceData] = useState();

  useEffect(()=>{
    if(data){
     setServiceData(data[0]?.mycore);
     console.log("mycore",serviceData);
    }
  },[data])
  return (
    <section className={styles.wrapper} id="Services">
      {/* LEFT – STICKY */}
      <div className={styles.left}>
        <span className={styles.badge}>Services</span>

        <h2 className={styles.heading}>
          Thoughtful design <br />
          built with purpose
        </h2>

        <p className={styles.subtext}>
          I help brands and products communicate clearly through
          intentional design and well-crafted digital experiences.
        </p>

        <button className={styles.cta}>
          Let’s Talk →
        </button>
      </div>

    
        <div className={styles.right}>
        <ServiceTile
          icon={<Layout />}
          title="UI/UX Design"
          desc="From wireframes to high-fidelity mockups, I design intuitive user interfaces guided by real user needs."
          tags={["Web Design", "Mobile Design", "Prototyping", "Design System"]}
      
        />

        <ServiceTile
          icon={<Globe  />}
          title="Website Design"
          desc="Crafting visual identities that speak with clarity and confidence through cohesive web experiences."
          tags={["Visual Identity", "Logo Design", "Brand Guidelines", "Typography"]}
       
          
        />

        <ServiceTile
          icon={<Zap />}
          title="Framer Website"
          desc="High-performing Framer websites — responsive, animated, and easy to manage without code."
          tags={["Landing Page", "Multipage Website", "Website Migration"]}
      
        />
      </div>
    </section>
  );
};

const ServiceTile = ({ icon, title, desc, tags ,color2 }) => {


  return (
    <article className={styles.tile} >
      <div className={styles.tileHeader}>
        <div className={`${styles.iconWrap} bg-[#4a9a6e]`}>{icon}</div>
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>

      <div className={styles.tags}>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
};

export default Services;
