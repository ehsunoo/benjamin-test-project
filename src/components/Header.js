import React from "react";

import styles from "./styles/Header.module.scss";

import logo from "../assets/logo_white.png";

function Header() {
  return (
    <header className={styles.container}>
      <h3 className={styles.title}>Amis du Festival</h3>
      <div className={styles.logo}>
        <img src={logo} />
      </div>
    </header>
  );
}

export default Header;
