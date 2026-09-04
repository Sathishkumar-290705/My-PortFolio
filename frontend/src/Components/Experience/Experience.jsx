import { Briefcase, GraduationCap } from "lucide-react";
import styles from "./Experience.module.css";
import { useEffect, useState } from "react";

// map string -> actual icon component
const iconMap = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
};

const Experience = ({ data }) => {
  const [professionalData, setProfessionalData] = useState(null);
  const [sectionIcons, setSectionIcons] = useState({});

  useEffect(() => {
    if (data) {
      setProfessionalData(data[0]?.professional);
      setSectionIcons(data[0]?.sectionIcons || {});
    }
  }, [data]);

  return (
    <section className={styles.container} id="Experience">
      <div className={styles.list}>
        {professionalData &&
          Object.entries(professionalData).map(([key, value], index) => {
            const Icon = iconMap[sectionIcons[key]];

            return (
              <div key={key}>
                <h1 className={styles.listheading}>
                  {Icon && <Icon className="w-8 h-8" />} {key}
                </h1>
                <div className={styles.listcontainer}>
                  {Array.isArray(value) &&
                    value.map((item, i) => (
                      <div key={i} className={styles.item}>
                        <div className={styles.left}>
                          <h3>
                            {item.role} &nbsp;<span>@ {item.company}</span>
                          </h3>
                          <p>{item.description}</p>
                        </div>
                        <div className={styles.right}>{item.duration}</div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Experience;