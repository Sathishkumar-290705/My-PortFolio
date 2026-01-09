import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Product Designer",
    company: "Multivista",
    duration: "July 2023 – Current",
    description:
      "Transforming complex 360° capture workflows into intuitive, end-to-end product experiences for the GoCapture app.",
  },
  {
    role: "UX Instructor",
    company: "Tamwood Career College",
    duration: "June 2023 – December 2024",
    description:
      "Mentored over 50 aspiring designers through hands-on UX instruction, elevating portfolio quality and improving job placement outcomes.",
  },
  {
    role: "UX Designer",
    company: "Langara College",
    duration: "January 2023 – April 2023",
    description:
      "Led the UX and visual design of an online showcase platform, increasing student portfolio engagement.",
  },
  {
    role: "UX Designer",
    company: "eOrigami Softwares",
    duration: "August 2020 – December 2021",
    description:
      "Designed user-centered interfaces for enterprise applications, improving usability and workflow efficiency.",
  },
];

const Experience = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Work experience</h2>

      <div className={styles.list}>
        {experiences.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.left}>
              <h3>
                {item.role} <span>@ {item.company}</span>
              </h3>
              <p>{item.description}</p>
            </div>

            <div className={styles.right}>{item.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
