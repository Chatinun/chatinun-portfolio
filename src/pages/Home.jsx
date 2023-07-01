import { FaEnvelope } from "react-icons/fa";

import { PortfolioCard } from "../components/PortfolioCard";
import { Reveal } from "../components/Reveal";
import workList from "../data/portfolioWork.json";
import styles from "./Home.module.css";

import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
  return (
    <div className="container">
      <div className="content__wrapper">
        <Reveal>
          <HeroSection />
        </Reveal>
        <AboutSection />
        <div id="portfolio" className={styles["portfolio__section"]}>
          <Reveal>
            <div className={styles["portfolio__title"]}>
              <h3>
                <span>Portfolio</span>
              </h3>
              <h2>All of my proud works</h2>
              <h4>But I'm still learning for improvement</h4>
            </div>
          </Reveal>
          {workList.map((item, index) => {
            return (
              <Reveal>
                <PortfolioCard key={index} {...item} />
              </Reveal>
            );
          })}
        </div>
        <div id="contact" className={styles["contact__section"]}>
          <Reveal>
            <div className={styles["contact__wrapper"]}>
              <div className={styles["contact__title"]}>
                <h3>
                  <span>Contact</span>
                </h3>
                <h2>Feel free to get in touch with me!</h2>
              </div>
              <h4>
                I'm a junior developer who is excited to gain experience, and I
                would love to connect with you. Feel free to contact me via
                email—I'm eager to hear from you and discuss any opportunities
                or questions you may have.
              </h4>
              <div className={styles["contact__email"]}>
                <a href="mailto:chatinun.nuntapasuk@gmail.com">
                  <h3>chatinun.nuntapasuk@gmail.com</h3>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        <div></div>
      </div>
    </div>
  );
};
