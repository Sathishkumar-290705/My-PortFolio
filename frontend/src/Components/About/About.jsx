import styles from "./About.module.css";
import profile from '../../Assets/sathish_profile_image_2.jpg';
// import profileImg from "../../assets/about-profile.jpg"; // replace with your image

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.about}>
        {/* Left Image */}
        <div className={styles.imageSection}>
          <img src={profile} alt="About profile" />
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h1 className={styles.heading}>
            SathishKumar is  <span>a</span>
          </h1>

          <p>
            With over 15 years of experience designing{" "}
            <strong>award-winning products</strong>, I focus on AI-powered
            experiences that make complex data feel simple, reliable and human.
            I work on enterprise-grade, developer-facing platforms, with safety
            and governance built in from the first sketch to the production
            rollout.
          </p>

          <p>
            Since 2016, I’ve been combining Big Data and ML with{" "}
            <strong>AI experiments</strong>: framing problems, shaping AI
            behavior, and keeping models accountable through evaluation and
            feedback loops. My work lives at the intersection of UX, strategy
            and systems thinking, helping teams turn abstract models into clear,
            everyday decisions.
          </p>

          <p className={styles.tagline}>
            Speed for the start, care for what truly scales. Let’s connect!
          </p>

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
