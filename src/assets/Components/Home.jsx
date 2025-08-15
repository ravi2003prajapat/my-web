import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { useState } from "react";
import styles from "./Home.module.css";
import Photo from "../Photo.webp";
import cpp from "../cpp.webp";
import javascript from "../javascript.webp";
import html from "../html.webp";
import css from "../css.webp";
import bootstrap from "../bootstrap.webp";
import java from "../java.webp";
import python from "../python.webp";
import vite from "../vite.webp";
import react from "../react.webp";
import ckeditor from "../ckeditor.webp";
import vscode from "../vscode.webp";
import npm from "../npm.webp";
import git from "../git.webp";
import figma from "../figma.webp";
import photoshop from "../photoshop.webp";
import coreldraw from "../coreldraw.webp";
import premierpro from "../premierpro.webp";
import canva from "../canva.webp";
import card1 from "../card1.webp";
import card2 from "../card2.webp";
import card3 from "../card3.webp";
import certificate1 from "../certificate1.webp";
import certificate2 from "../certificate2.webp";
import certificate3 from "../certificate3.webp";
import certificate4 from "../certificate4.webp";
import certificate5 from "../certificate5.webp";
import certificate6 from "../certificate6.webp";
import certificate7 from "../certificate7.webp";
import certificate8 from "../certificate8.webp";
import certificate9 from "../certificate9.webp";
import certificate10 from "../certificate10.webp";
import certificate11 from "../certificate11.webp";
import certificate12 from "../certificate12.webp";

const journeyData = [
  {
    title: "Until 2021: School Education",
    description:
      "Focused on developing a well-rouneded academic backgorund while actively participating in extracurricular activites. This phase helped me build essential soft skill like discipline, curiosity, communication, and time management. It was a formative period that shaped my attitude toward learning and growth.",
  },
  {
    title: "2022-Present: B.Tech in Computer Science",
    description:
      "Pursuing a comprehensive education in computer science, exploring subjects like data structures, algorithms, databases, and software development. Alongside academics, actively involved in practical projects, teamwork, and skill-building activities. This phase is sharpening my analytical thinking, technical proficiency, and professional approach toward solving real-world problems.",
  },
  {
    title: "September, 2024: Intern at Bennett University",
    description:
      "Contributed during the NAAC accreditation period by supporting the university’s digital presence. Designed user interfaces for official website pages, including the Student Council page, ensuring clean layout, consistency, and responsiveness. This experience helped me understand design standards in academic institutions and collaborate on real-time requirements.",
  },
  {
    title: "July, 2025: Intern at Insightknox",
    description:
      "Worked as a frontend development intern, where I was responsible for designing and developing the entire company website from scratch. The site is now live and serves as Insightknox’s official online presence. This experience helped me strengthen my frontend skills and understand real-world deployment workflows.",
  },
  {
    title: "August, 2025: Intern at RMT Engineering",
    description: "Built a real-time chat app with React.js (Vite), Node.js, and MySQL for instant user communication. Managed database operations in DBeaver, conducted a Time Motion Study for CoinDCX’s dashboard, and developed reusable UI components for Radical Minds Technologies’ website.",
  },
];

const certificates = [
  {
    title: "Amazon AWS Certified Cloud Practitioner",
    buttonText: "View",
    image: certificate1,
  },
  {
    title: "Google Cloud Student Practitioner",
    buttonText: "View",
    image: certificate2,
  },
  {
    title: "Oracle Certified Multi Cloud Architect Associate",
    buttonText: "View",
    image: certificate3,
  },
  {
    title: "Oracle University Certified Architect Associate",
    buttonText: "View",
    image: certificate4,
  },
  {
    title: "US San Diego Algorithmic Toolbox",
    buttonText: "View",
    image: certificate5,
  },
  {
    title: "US San Diego Data Structures",
    buttonText: "View",
    image: certificate6,
  },
  {
    title: "Infosys Springboard Programming Using C++",
    buttonText: "View",
    image: certificate7,
  },
  {
    title: "Amazon AWS Academy Cloud Foundations",
    buttonText: "View",
    image: certificate8,
  },
  {
    title: "Google The Bits and Bytes of Computer Networking",
    buttonText: "View",
    image: certificate9,
  },
  {
    title: "Infosys Springboard Software Engineering",
    buttonText: "View",
    image: certificate10,
  },
  {
    title: "Infosys Springboard Introduction to Agile Testing",
    buttonText: "View",
    image: certificate11,
  },
  {
    title: "Infosys Springboard Introduction Artificial Intelligence",
    buttonText: "View",
    image: certificate12,
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.left}>
          <h1>
            Hi, I'm <strong>Ravi Prajapat</strong>
          </h1>
          <p>
            I’m a dedicated and passionate individual who loves exploring new
            ideas and challenges. I believe in continuous learning and growing
            through every experience. I enjoy creating meaningful connections
            and making a positive impact in everything I do.
          </p>
          <a
            href="https://drive.google.com/file/d/1_08psiiNj9zsrQvv-guhv8ls6aL7V71P/view?usp=sharing"
            target="_blank"
          >
            <button className={styles.resume_button}>View Resume</button>
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.circle}>
            <LazyLoadImage className={styles.photo} src={Photo} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>

      <div className={styles.projects}>
        <h1 className={styles.projectstag}>Things I've Built</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <LazyLoadImage effect="blur" className={styles.card1} src={card1} alt="" />
            <a href="https://www.insightknox.com/">
              <button>Click Here</button>
            </a>
          </div>
          <div className={styles.card}>
            <LazyLoadImage effect="blur" className={styles.card2} src={card2} alt="" />
            <a href="https://www.radicalminds.in/industries/education">
              <button>Click Here</button>
            </a>
          </div>
          <div className={styles.card}>
            <LazyLoadImage effect="blur" className={styles.card3} src={card3} alt="" />
            <a href="https://github.com/RaviPrajapat007/Tunest/tree/main/Tunest%20Project">
              <button>Click Here</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <p>My Stack</p>
        <div className={styles.skillcontainer}>
          <div className={styles.slider}>
            <LazyLoadImage effect="blur" src={cpp} alt="" />
            <LazyLoadImage effect="blur" src={javascript} alt="" />
            <LazyLoadImage effect="blur" src={html} alt="" />
            <LazyLoadImage effect="blur" src={css} alt="" />
            <LazyLoadImage effect="blur" src={bootstrap} alt="" />
            <LazyLoadImage effect="blur" src={java} alt="" />
            <LazyLoadImage effect="blur" src={python} alt="" />
            <LazyLoadImage effect="blur" src={react} alt="" />
            <LazyLoadImage effect="blur" src={vite} alt="" />
            <LazyLoadImage effect="blur" src={ckeditor} alt="" />
            <LazyLoadImage effect="blur" src={vscode} alt="" />
            <LazyLoadImage effect="blur" src={npm} alt="" />
            <LazyLoadImage effect="blur" src={git} alt="" />
            <LazyLoadImage effect="blur" src={figma} alt="" />
            <LazyLoadImage effect="blur" src={photoshop} alt="" />
            <LazyLoadImage effect="blur" src={coreldraw} alt="" />
            <LazyLoadImage effect="blur" src={premierpro} alt="" />
            <LazyLoadImage effect="blur" src={canva} alt="" />

            {/* Dupicated Images */}
            <LazyLoadImage effect="blur" src={cpp} alt="" />
            <LazyLoadImage effect="blur" src={javascript} alt="" />
            <LazyLoadImage effect="blur" src={html} alt="" />
            <LazyLoadImage effect="blur" src={css} alt="" />
            <LazyLoadImage effect="blur" src={bootstrap} alt="" />
            <LazyLoadImage effect="blur" src={java} alt="" />
            <LazyLoadImage effect="blur" src={python} alt="" />
            <LazyLoadImage effect="blur" src={react} alt="" />
            <LazyLoadImage effect="blur" src={vite} alt="" />
            <LazyLoadImage effect="blur" src={ckeditor} alt="" />
            <LazyLoadImage effect="blur" src={vscode} alt="" />
            <LazyLoadImage effect="blur" src={npm} alt="" />
            <LazyLoadImage effect="blur" src={git} alt="" />
            <LazyLoadImage effect="blur" src={figma} alt="" />
            <LazyLoadImage effect="blur" src={photoshop} alt="" />
            <LazyLoadImage effect="blur" src={coreldraw} alt="" />
            <LazyLoadImage effect="blur" src={premierpro} alt="" />
            <LazyLoadImage effect="blur" src={canva} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.journey}>
        <div className={styles.leftjourney}>
          <h1>EVOLUTION</h1>
          <h2>OF MY SKILLS</h2>
        </div>
        <div className={styles.rightjourney}>
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={styles.jour}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className={styles.jourline}></div>
              <div className={styles.heading}>
                {item.title.split(":")[0]}:
                <strong>{item.title.split(":")[1]}</strong>
                {openIndex === index && (
                  <p className={styles.jourDescription}>{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.certificatecontainer}>
        <h1 className={styles.certificateheading}>
          Certifications & Achievements
        </h1>

        <div className={styles.content}>
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={styles.certificate}
              onClick={() => setActiveImage(cert.image)}
            >
              <div className={styles.top}>
                <h1>{cert.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveImage(null)}
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <LazyLoadImage
            effect="blur"
              src={activeImage}
              alt="Certificate"
              className={styles.modalImage}
            />
            <button
              className={styles.closeButton}
              onClick={() => setActiveImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
