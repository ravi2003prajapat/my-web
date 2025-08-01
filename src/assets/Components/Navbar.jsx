  import React from 'react'
  import styles from "./Navbar.module.css"
  import { Link } from "react-router-dom";


  const Navbar = () => {
    return (
      <div className={styles.navbar}>
          <div className={styles.logo}>Ravi Prajapat</div>
          <ul>
              <li><Link to="/" className={styles.nav_pages}>Home</Link></li>
              <li><Link to="/portfolio" className={styles.nav_pages}>Portfolio</Link></li>
              <li><Link to="/blog" className={styles.nav_pages}>Blog</Link></li>
              <button>Let's Talk</button>
          </ul>
      </div>
    )
  }

  export default Navbar