import React, { useCallback, useState } from "react";

import styles from "./styles/LevelMenu.module.scss";

import LevelButton from "../components/LevelButton";

function LevelMenu({ menu, levelActive, setLevelActive, setLevelContent }) {
  const clickHandler = useCallback((item) => {
    setLevelContent(item);
  }, []);

  return (
    <div className={styles.container}>
      <ul>
        {menu?.map((item) => (
          <li
            key={item.level}
            onClick={() => {
              clickHandler(item);
              setLevelActive(item.level);
            }}
          >
            <LevelButton level={item.level} active={levelActive}>
              {item.level}
            </LevelButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LevelMenu;
