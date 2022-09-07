import React from "react";

import styles from "./styles/LevelContent.module.scss";

function LevelContent({ content }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{content ? `$ ${content.level} Perks` : `Perks`}</p>
      <p className={styles.des}>
        {content ? `$ ${content.des}` : `Choose amount to view perks`}
        {content.des}
      </p>
      <ul className={styles.details}>
        {content.details?.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
}

export default LevelContent;
