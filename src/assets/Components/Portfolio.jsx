import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import ui1 from "../ui1.png";
import ui2 from "../ui2.png";
import ui3 from "../ui3.jpg";
import ui4 from "../ui4.jpg";
import ui5 from "../ui5.jpg";
import graphic from "../graphic1.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    ui1,
    ui3,
    ui2,
    ui4,
    ui5,
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

      <div className={styles.graphiccontainer}></div>
    </div>
  );
};

export default Portfolio;
