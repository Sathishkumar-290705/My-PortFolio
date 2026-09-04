import { Layout, Globe, Zap } from "lucide-react";
import styles from "./Services.module.css";
import { useEffect, useState } from "react";

const iconMap = {
  Layout: <Layout />,
  Globe: <Globe />,
  Zap: <Zap />,
};

const Services = ({ data }) => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    if (data) {
      setServiceData(data[0]?.mycore); 
      console.log("sathish", data[0]?.mycore);
    }
  }, [data]);

  if (!serviceData) return null;

  const { left, services } = serviceData;
  const headingLines = left.heading.split("\n");

  return (
    <section className={styles.wrapper} id="Services">
      <div className={styles.left}>
        <span className={styles.badge}>{left.badge}</span>

        <h2 className={`${styles.heading} services_heading`}>
          {headingLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headingLines.length - 1 && <br />}
            </span>
          ))}
        </h2>

        <p className={styles.subtext}>{left.subtext}</p>

        <button className={styles.cta}>{left.ctaText} →</button>
      </div>

      <div className={styles.right}>
        {Array.isArray(services) &&
          services.map((service) => (
            <ServiceTile
              key={service._id}
              icon={iconMap[service.icon]}
              title={service.title}
              desc={service.desc}
              tags={service.tags}
            />
          ))}
      </div>
    </section>
  );
};

const ServiceTile = ({ icon, title, desc, tags }) => {
  return (
    <article className={styles.tile}>
      <div className={styles.tileHeader}>
        <div className={`${styles.iconWrap} bg-[#4a9a6e]`}>{icon}</div>
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>

      <div className={styles.tags}>
        {Array.isArray(tags) &&
          tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </article>
  );
};

export default Services;