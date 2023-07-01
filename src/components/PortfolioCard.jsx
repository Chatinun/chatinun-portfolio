import styles from "./PortfolioCard.module.css";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaDatabase,
  FaFileAlt,
  FaYoutube,
  FaDownload,
} from "react-icons/fa";

export const PortfolioCard = ({
  projectName,
  image,
  type,
  techStack,
  description,
  apiLink,
  apiDocument,
  liveDemo,
  github,
  youtube,
  download,
}) => {
  return (
    <div className={styles["portfolio__card"]}>
      <div className={styles["portfolio__image"]}>
        <img src={image} />
      </div>
      <div className={styles["portfolio__context"]}>
        <div>
          <h3>{projectName}</h3>
          <div className={styles["portfolio__techstack"]}>
            {techStack.map((item) => (
              <div className={styles["techstack__item"]}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p>{type}</p>
        </div>
        <p>{description}</p>

        <div className={`${styles["portfolio__links"]} underline-links`}>
          {liveDemo && (
            <a href={liveDemo} target="_blank">
              <button>
                Live Demo
                <FaExternalLinkAlt />
              </button>
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank">
              <button>
                Youtube
                <FaYoutube />
              </button>
            </a>
          )}
          {apiLink && (
            <a href={apiLink} target="_blank">
              <button>
                API Link
                <FaDatabase />
              </button>
            </a>
          )}
          {github && (
            <a href={github} target="_blank">
              <button>
                Github
                <FaGithub />
              </button>
            </a>
          )}
          {apiDocument && (
            <a href={apiDocument} target="_blank">
              <button>
                Document
                <FaFileAlt />
              </button>
            </a>
          )}
          {download && (
            <a href={download} target="_blank">
              <button>
                Download
                <FaDownload />
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
