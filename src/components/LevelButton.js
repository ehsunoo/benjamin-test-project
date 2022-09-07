import React from "react";

import styles from "./styles/LevelButton.module.scss";

function LevelButton(props) {
  return <div className={`${styles.container} ${props.level === props.active ? styles.active : ""}`}>${props.children}</div>;
}

export default LevelButton;
