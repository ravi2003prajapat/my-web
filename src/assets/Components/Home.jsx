import React from "react";
import styles from "./Home.module.css";
import Photo from "../Photo.png";

const Home = () => {
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

      </div>
    </>
  );
};

export default Home;
