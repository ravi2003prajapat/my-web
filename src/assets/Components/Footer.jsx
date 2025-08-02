import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.firstname}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
          />
        </div>
        <div className={styles.lastname}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.message}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            placeholder="Enter your message">
          </textarea>
        </div>
        <button className={styles.send}>Send</button>
      </div>
    </div>
  );
};

export default Footer;
