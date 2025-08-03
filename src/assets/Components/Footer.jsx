import React from "react";
import styles from "./Footer.module.css";
import website from "../website.png";
import linkedin from "../linkedin.png";
import github from "../github.png";
import mail from "../mail.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>

        <div className={styles.upper}>
          <h1>@RAVIPRAJAPAT</h1>
          <h2>GET IN TOUCH</h2>
        </div>
        <div className={styles.lower}>
          <h1>Contact us:</h1>

          <a href="https://my-web-five-eta.vercel.app/"><img className={styles.website} src={website} alt="" /></a>
          <a href="https://www.linkedin.com/in/ravi-prajapat/" target="_blank"><img className={styles.linkedin} src={linkedin} alt="" /></a>
          <a href="https://github.com/RaviPrajapat007?tab=repositories" target="_blank"><img className={styles.github} src={github} alt="" /></a>
          <a href="https://mail.google.com/mail/u/2/#inbox?compose=DmwnWrRspxSnQlSDCdcCnFLKjdpFZRrDKBkNgBQXMtMJkLTHnsNQZvqMmpcQNkRvsdjBCFKjFpqQ" target="_blank"><img className={styles.mail} src={mail} alt="" /></a>
        </div>
        
      </div>
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
