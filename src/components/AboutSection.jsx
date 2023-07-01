import { AboutTab } from "../components/AboutTab";
import { Tilt } from "react-tilt";
import { Reveal } from "../components/Reveal";
import styles from "./AboutSection.module.css";

export const AboutSection = () => {
  return (
    <div id="about" className={styles["about__section"]}>
      <Reveal>
        <div className={styles["about__title"]}>
          <h3>
            <span>About</span>
          </h3>
          <h2>Personal Info</h2>
          <h4>Get to know more about me</h4>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles["about__context"]}>
          <div className={styles["about__img"]}>
            <Tilt
              options={{
                transition: true,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                reset: true,
                speed: 1000,
                scale: 1,
                max: 10,
                axis: "x",
              }}
            >
              <img src="/images/about_1.jpg" alt="" />
            </Tilt>
          </div>
          <div className={styles["about__info"]}>
            <p>
              <span style={{ fontSize: "1.5rem", fontWeight: "800" }}>
                Hi there!{"  "}
              </span>
              I'm a recent graduate who's passionate about coding. I'm excited
              to start my career as a <span>Front-End Developer</span>. Although
              I don't have any work experience yet, I have a strong desire to
              learn and grow in the field. Let's collaborate and bring your
              digital ideas to life!
            </p>
            <AboutTab />
          </div>
        </div>
      </Reveal>
    </div>
  );
};
