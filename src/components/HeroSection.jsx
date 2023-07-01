import styles from "./HeroSection.module.css";
import { Tilt } from "react-tilt";

export const HeroSection = () => {
  return (
    <div id="home" className={styles["hero__section"]}>
      {/*       <div className={styles["hero-sns__section"]}>
        <img src="/images/github_logo.png" alt="" />
        <img src="/images/facebook_logo.png" alt="" />
        <img src="/images/instragram_logo.png" alt="" />
      </div> */}
      <div className={styles["hero__context"]}>
        <div className={styles["hero-context__title"]}>
          <h1>
            Hi, I'm Chatinun<span>.</span>
          </h1>
          <h3>
            I'm Junior <span>Front-End Developer</span>
          </h3>
        </div>
        <h4>
          Based in Bangkok, Thailand. I'm excited to contribute my skills and
          take advantage of growth opportunities in the field.
        </h4>
        <div className={styles["hero-tech-stack__section"]}>
          <h5>My Tech Stack</h5>
          <div
            style={{
              height: "100%",
              width: "3px",
              backgroundColor: "rgb(240, 0, 108)",
            }}
          ></div>
          <img src="/images/html_logo.png" />
          <img src="/images/css_logo.png" />
          <img src="/images/javascript_logo.png" />
          <img src="/images/react_logo.png" />
        </div>
        <div className={styles["hero-contact__section"]}>
          <a href="#contact">
            <button className={styles["contact__button"]}>Contact Me</button>
          </a>
          <a href="#portfolio">
            <button className={styles["portfolio__button"]}>
              View Portfolio {">"}
            </button>
          </a>
        </div>
      </div>
      <div className={styles["hero__image"]}>
        <Tilt
          options={{
            transition: true,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            reset: true,
            speed: 1000,
            scale: 1,
            max: 10,
          }}
        >
          <div className={styles["hero-image__wrapper"]}>
            <img src="/images/hero_1.jpg" />
          </div>
        </Tilt>
      </div>
    </div>
  );
};
