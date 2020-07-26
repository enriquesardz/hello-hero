import React from "react";
// Router
import { Link } from "react-router-dom";
// Styles
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["f-row"]}>
        <Link to="/">
          <img
            className={styles["f-icn"]}
            src={require("assets/icons/pokeball-white.svg")}
            alt="home"
          />
        </Link>
        <a href="mailto:enriquesaalas@gmail.com">enriquesaalas@gmail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
