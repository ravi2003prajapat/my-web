import React, { useState } from "react";
import styles from "./Footer.module.css";
import website from "../website.png";
import linkedin from "../linkedin.png";
import github from "../github.png";
import mail from "../mail.png";

const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const response = await fetch("http://172.20.23.122:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message);

      // Clear form after success (optional)
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.upper}>
          <h1>@RAVIPRAJAPAT</h1>
          <h2>GET IN TOUCH</h2>
        </div>
        <div className={styles.lower}>
          <h1>Contact us:</h1>

          <a href="https://my-web-five-eta.vercel.app/">
            <img className={styles.website} src={website} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ravi-prajapat/" target="_blank">
            <img className={styles.linkedin} src={linkedin} alt="" />
          </a>
          <a
            href="https://github.com/RaviPrajapat007?tab=repositories"
            target="_blank"
          >
            <img className={styles.github} src={github} alt="" />
          </a>
          <a
            href="https://mail.google.com/mail/u/2/#inbox?compose=DmwnWrRspxSnQlSDCdcCnFLKjdpFZRrDKBkNgBQXMtMJkLTHnsNQZvqMmpcQNkRvsdjBCFKjFpqQ"
            target="_blank"
          >
            <img className={styles.mail} src={mail} alt="" />
          </a>
        </div>
      </div>
      <form className={styles.right} onSubmit={handleSubmit}>
        <div className={styles.firstname}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.lastname}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.message}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={styles.send}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Footer;
