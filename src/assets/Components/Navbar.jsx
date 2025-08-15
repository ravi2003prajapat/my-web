import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <a href="https://my-web-five-eta.vercel.app/">
        <div className={styles.logo}>Ravi Prajapat</div>
      </a>
      <ul>
        <li>
          <Link to="/" className={styles.nav_pages}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={styles.nav_pages}>
            The Artboard
          </Link>
        </li>
        <li>
          <Link to="/blog" className={styles.nav_pages}>
            
          </Link>
        </li>
        <div id="contact">
          <button
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            Let's Talk
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
