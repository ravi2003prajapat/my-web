import React, { useState } from "react";
import styles from "./Home.module.css";
import Photo from "../Photo.png";
import cpp from "../cpp.png";
import javascript from "../javascript.webp";
import html from "../html.webp";
import css from "../css.png";
import bootstrap from "../bootstrap.png";
import java from "../java.png";
import python from "../python.jfif";
import vite from "../vite.jfif";
import react from "../react.png";
import ckeditor from "../ckeditor.png";
import vscode from "../vscode.png";
import npm from "../npm.png";
import git from "../git.png";
import figma from "../figma.png";
import photoshop from "../photoshop.png";
import coreldraw from "../coreldraw.png";
import premierpro from "../premierpro.png";
import canva from "../canva.png";

const journeyData = [
  {
    title: "Until 2021: School Education",
    description:
      "Completed schooling with a strong focus on science and mathematics.",
  },
  {
    title: "2022-Present: B.Tech in Computer Science",
    description:
      "Pursuing engineering at Bennett University, learning programming, systems, and more.",
  },
  {
    title: "September, 2024: Intern at Bennett University",
    description: "Worked on internal tools and platforms at the university.",
  },
  {
    title: "July, 2025: Intern at Insightknox",
    description: "Contributed to full-stack web development projects.",
  },
  {
    title: "August, 2025: Intern at RMT Engineering",
    description: "Involved in software automation and testing.",
  },
];

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
          <button className={styles.resume_button}>View Resume</button>
        </div>
        <div className={styles.right}>
          <div className={styles.circle}>
            <img className={styles.photo} src={Photo} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.projects}>
        <h1 className={styles.projectstag}>Things I've Built</h1>
        <div className={styles.cards}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
      <div className={styles.skills}>
        <p>My Stack</p>
        <div className={styles.skillcontainer}>
          <div className={styles.slider}>
            <img src={cpp} alt="" />
            <img src={javascript} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={bootstrap} alt="" />
            <img src={java} alt="" />
            <img src={python} alt="" />
            <img src={react} alt="" />
            <img src={vite} alt="" />
            <img src={ckeditor} alt="" />
            <img src={vscode} alt="" />
            <img src={npm} alt="" />
            <img src={git} alt="" />
            <img src={figma} alt="" />
            <img src={photoshop} alt="" />
            <img src={coreldraw} alt="" />
            <img src={premierpro} alt="" />
            <img src={canva} alt="" />

            {/* Dupicated Images */}
            <img src={cpp} alt="" />
            <img src={javascript} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={bootstrap} alt="" />
            <img src={java} alt="" />
            <img src={python} alt="" />
            <img src={react} alt="" />
            <img src={vite} alt="" />
            <img src={ckeditor} alt="" />
            <img src={vscode} alt="" />
            <img src={npm} alt="" />
            <img src={git} alt="" />
            <img src={figma} alt="" />
            <img src={photoshop} alt="" />
            <img src={coreldraw} alt="" />
            <img src={premierpro} alt="" />
            <img src={canva} alt="" />
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
              <div>
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
    </>
  );
};

export default Home;
