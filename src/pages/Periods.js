import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Style
import styles from "./styles/Periods.module.scss";

// Components
import Layout from "../components/Layout";
import LevelContent from "../components/LevelContent";
import LevelMenu from "../components/LevelMenu";
import ContinueButton from "../components/ContinueButton";

function Periods() {
  const [levelMenu, setLevelMenu] = useState([]);
  const [levelContent, setLevelContent] = useState("");
  const [levelActive, setLevelActive] = useState(false);
  const params = useParams();

  useEffect(() => {
    // Clear level content & level active states
    setLevelContent("");
    setLevelActive(false);

    switch (params.period) {
      case "onetime":
        axios.get("/data.json").then((res) => setLevelMenu(JSON.parse(res.data)[0]));
        break;
      case "monthly":
        axios.get("/data.json").then((res) => setLevelMenu(JSON.parse(res.data)[1]));
        break;
      case "annually":
        axios.get("/data.json").then((res) => setLevelMenu(JSON.parse(res.data)[2]));
        break;
    }
  }, [params.period]);

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.menu}>
            <h2 className={styles.title}>Choose a Donation Level</h2>
            <div className={styles.levels}>
              <LevelMenu menu={levelMenu} levelActive={levelActive} setLevelActive={setLevelActive} setLevelContent={setLevelContent} />
            </div>
          </div>
          <div className={styles.content}>
            <LevelContent content={levelContent} />
          </div>
        </div>
        <div className={styles.pagination}>{levelActive && <ContinueButton />}</div>
      </Layout>
    </>
  );
}

export default Periods;
