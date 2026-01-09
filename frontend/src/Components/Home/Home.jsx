import styles from "./Home.module.css";
// import profileImg from "../../assets/profile.png"; // replace with your image

const Home = () => {


  return (
    <div className={styles.container}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>✦</div>
        <ul className={styles.navLinks}>
          <li>home</li>
          <li>work</li>
          <li>about</li>
          <li>connect</li>
          <li>resume</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        {/* Left Content */}
        <div className={styles.left}>
          <div className={styles.status}>
            <span className={styles.dot}></span>
            Available to work
          </div>

          <h1 className={styles.title}>
            Hi, I’m <br /> Monisha!
          </h1>

          <p className={styles.subtitle}>
            I’m a product designer at WorkSpan <br />
            based out of Bengaluru.
          </p>

          <div className={styles.card}>
            <p className={styles.cardTitle}>what you’ll find me doing</p>
            <ul>
              <li>making art <span>@rkivesofagust</span></li>
              <li>reading Artist’s Way</li>
            </ul>
          </div>
        </div>

        {/* Right Content */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <img  alt="profile" />
            <span className={`${styles.tag} ${styles.music}`}>Music</span>
            <span className={`${styles.tag} ${styles.art}`}>Art</span>
            <span className={`${styles.tag} ${styles.design}`}>Design</span>
            <p className={styles.circularText}>
              I WANNA BE A HUMAN BEFORE I DO SOME ART
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
