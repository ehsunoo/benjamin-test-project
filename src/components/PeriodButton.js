import React from "react";

import styles from "./styles/PeriodButton.module.scss";

function PeriodButton(props) {
  return <div className={`${styles.container} ${props.period === props.active ? styles.active : styles.container}`}>{props.children}</div>;
}

export default PeriodButton;
