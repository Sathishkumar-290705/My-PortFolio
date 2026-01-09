import { Layout, Globe, Zap, Plus } from "lucide-react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.wrapper}>
      {/* LEFT – STICKY */}
      <div className={styles.left}>
        <span className={styles.badge}>What I Do</span>

        <h2 className={styles.heading}>
          Design solutions crafted <br />
          to match your vision
        </h2>

        <button className={styles.cta}>
          <span>📞</span> Let’s Talk
        </button>
      </div>

      {/* RIGHT – SCROLL */}
      <div className={styles.right}>
        <ServiceTile
          icon={<Layout />}
          title="UI/UX Design"
          desc="From wireframes to high-fidelity mockups, I design intuitive user interfaces guided by real user needs."
          tags={["Web Design", "Mobile Design", "Prototyping", "Design System"]}
        />

        <ServiceTile
          icon={<Globe />}
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

const ServiceTile = ({ icon, title, desc, tags }) => {
  return (
    <div className={styles.tile}>
      <div className={styles.tileHeader}>
        <div className={styles.iconWrap}>{icon}</div>
        <button className={styles.expand}>
          <Plus size={18} />
        </button>
      </div>

      <h3>{title}</h3>
      <p>{desc}</p>

      <div className={styles.tags}>
        {tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Services;
