import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>RichiRich</div>
        <ul>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Work</li>
            <button><li>Contact Us</li></button>
        </ul>
    </div>
  )
}

export default Navbar