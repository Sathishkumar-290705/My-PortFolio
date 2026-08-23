import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import {
  Facebook,
  Github,
  Linkedin,
  TwitterIcon,
} from "lucide-react";

const Home = ({ data }) => {
  const [homedata, setHomeData] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (data) {
      setHomeData(data[0]?.home);
      setLinks(data[0]?.links);
    }
  }, [data]);

  const linksicon = {
    Github: Github,
    Linkedin: Linkedin,
    X: TwitterIcon,
    Facebook: Facebook,
  };

  const notneed = ["Github", "Linkedin", "X", "Facebook"];

  return (
    <div className={styles.container} id="Home">
      <section className={styles.hero}>
        {/* <div className={styles.location}>
          <span>
            <MapPin width={20} height={20} />
          </span>
          Chennai, TamilNadu, India
        </div> */}

        <h1 className={styles.title}>
          <div className={styles.line}> </div>
          {homedata?.name}, {`${homedata?.role1} | ${homedata?.role2}`}
        </h1>
        <h2 className={styles.subtitle}> Building Intelligent ML Systems That Scale </h2>
       

        <div className={styles.card}>
          <p className={styles.description}>
            {homedata?.description }
          </p>
          {/* <div className={styles.status}>
            <span className={styles.dot}></span>
            Available to work
          </div> */}
          <div className={styles.buttonContainer}>
            <button className={styles.chatButton}>Let's Chat</button>
            <button className={styles.knowMoreButton}>Know More</button>
          </div>
        </div>

        {/* <ul className={styles.value}>
          {links && links?.filter(l => l.in)?.map((value, item) => {
            const Links = linksicon[value.name];
            return (
              <li key={item}>

                <a href={value.url} target="_blank">
                  <Links />
                </a>{" "}
              </li>
            );
          })}
        </ul> */}
      </section>
    </div>
  );
};

export default Home;
