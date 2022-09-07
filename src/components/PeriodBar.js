import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import PeriodButton from "./PeriodButton";

import styles from "./styles/PeriodBar.module.scss";

function DonationBar() {

  const location = useLocation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Choose Your Donation Frequency</h2>
      <div className={styles.periods}>
        <NavLink to="/onetime">
          <PeriodButton period = "/onetime" active={location.pathname}>One-Time</PeriodButton>
        </NavLink>
        <NavLink to="/monthly">
          <PeriodButton period="/monthly" active={location.pathname}>Monthly</PeriodButton>
        </NavLink>
        <NavLink to="/annually">
          <PeriodButton period="/annually" active={location.pathname}>Annually</PeriodButton>
        </NavLink>
      </div>
    </div>
  );
}

export default DonationBar;
