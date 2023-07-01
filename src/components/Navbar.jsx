import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    if (isNavOpen) setIsNavOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setIsNavOpen(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles["nav__wrapper"]}>
      <div className="container">
        <nav id="nav">
          <a href="#top">
            <div className={styles["nav__logo"]}>
              <img src="/images/logo.png" />
            </div>
          </a>
          <div
            className={`underline-links ${styles["nav__links"]} ${
              isNavOpen ? styles["active"] : ""
            }`}
          >
            <a onClick={closeNav} href="#top">
              Home
            </a>
            <a onClick={closeNav} href="#about">
              About
            </a>
            <a onClick={closeNav} href="#portfolio">
              Projects
            </a>
            <a onClick={closeNav} href="#contact">
              Contact
            </a>
          </div>
          <button onClick={toggleNav} className={`${styles["nav__button"]} `}>
            {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>
      </div>
    </div>
  );
};
