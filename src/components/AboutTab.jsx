import { useState } from "react";
import styles from "./AboutSection.module.css";

export const AboutTab = () => {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (id) => {
    setToggle(id);
  };

  return (
    <div className={styles["about__tab"]}>
      <div className={styles["about__selector"]}>
        <button
          className={`${toggle === 1 ? styles["toggle"] : ""}`}
          onClick={() => updateToggle(1)}
        >
          Skills
        </button>
        <button
          className={`${toggle === 2 ? styles["toggle"] : ""}`}
          onClick={() => updateToggle(2)}
        >
          Experience
        </button>
        <button
          className={`${toggle === 3 ? styles["toggle"] : ""}`}
          onClick={() => updateToggle(3)}
        >
          Education
        </button>
      </div>
      <div
        className={`${
          toggle === 1 ? styles["show-content"] : styles["hide-content"]
        }`}
      >
        <p className={styles["content__info"]}>
          Attention to detail, eagerness to learn, and strong problem-solving
          abilities are crucial skills
        </p>
      </div>
      <div
        className={`${
          toggle === 2 ? styles["show-content"] : styles["hide-content"]
        }`}
      >
        <div>
          <div className={styles["content__wrapper"]}>
            <h5>Bit Egg Inc. (Internship)</h5>
            <h5>2022</h5>
          </div>
          <p className={styles["content__info"]}>
            I worked as a Unity Game Developer. My primary responsibilities is
            fixing bugs and implementing new features with the guidance of a
            mentor.
          </p>
        </div>
      </div>
      <div
        className={`${
          toggle === 3 ? styles["show-content"] : styles["hide-content"]
        }`}
      >
        <div>
          <div className={styles["content__wrapper"]}>
            <h5>Thai-Nichi Institue of Technology</h5>
            <h5>2019-2022</h5>
          </div>
          <div className={styles["content__wrapper"]}>
            <p>Multimedia Tecnology</p>
            <p>GPA 3.93</p>
          </div>
        </div>
        <div>
          <div className={styles["content__wrapper"]}>
            <h5>Triamudomsukanomklao School</h5>
            <h5>2016-2018</h5>
          </div>
          <div className={styles["content__wrapper"]}>
            <p>English-Mathematics</p>
            <p>GPA 3.32</p>
          </div>
        </div>
      </div>
    </div>
  );
};
