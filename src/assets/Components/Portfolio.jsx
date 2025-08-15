import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import ui1 from "../ui1.webp";
import ui2 from "../ui2.webp";
import ui3 from "../ui3.webp";
import ui4 from "../ui4.webp";
import ui5 from "../ui5.webp";
import graphic1 from "../graphic1.webp";
import graphic2 from "../graphic2.webp";
import graphic3 from "../graphic3.webp";
import graphic4 from "../graphic4.webp";
import graphic5 from "../graphic5.webp";
import graphic6 from "../graphic6.webp";
import graphic7 from "../graphic7.webp";
import graphic8 from "../graphic8.webp";
import graphic9 from "../graphic9.webp";
import graphic10 from "../graphic10.webp";
import graphic11 from "../graphic11.webp";
import graphic12 from "../graphic12.webp";


const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [ui1, ui3, ui2, ui4, ui5];

  const graphicdesigns = [
    graphic1,
    graphic2,
    graphic3,
    graphic4,
    graphic5,
    graphic6,
    graphic7,
    graphic8,
    graphic9,
    graphic10,
    graphic11,
    graphic12,
  ];

  const openImage = (img) => setSelectedImage(img);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className={styles.portfolio}>
      <div className={styles.uicontainer}>
        <h1>UI/UX Designs</h1>
        <div className={styles.uibox}>
          {images.map((img, index) => (
            <div
              key={index}
              className={styles.uidesigns}
              onClick={() => openImage(img)}
            >
              <img
                src={img}
                alt={`UI Design ${index + 1}`}
                className={styles.uiImage}
              />
            </div>
          ))}
        </div>

        {/* Modal Section */}
        {selectedImage && (
          <div className={styles.modalOverlay} onClick={closeImage}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside image
            >
              <button onClick={closeImage} className={styles.closeBtn}>
                ×
              </button>
              <img src={selectedImage} alt="Enlarged UI" />
            </div>
          </div>
        )}
      </div>

      <div className={styles.graphiccontainer}>
        <h1>Graphic Designs</h1>
        <div className={styles.graphicbox}>
          {graphicdesigns.map((img, index) => (
            <div
              key={index}
              className={styles.graphicdesigns}
              onClick={() => openImage(img)}
            >
              <img
                src={img}
                alt={`UI Design ${index + 1}`}
                className={styles.graphicImage}
              />
            </div>
          ))}
        </div>

        {/* Modal Section */}
        {selectedImage && (
          <div className={styles.modalOverlay} onClick={closeImage}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside image
            >
              <button onClick={closeImage} className={styles.closeBtn}>
                ×
              </button>
              <img src={selectedImage} alt="Enlarged UI" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
