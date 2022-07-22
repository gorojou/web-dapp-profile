import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
function WavesLight({ children }) {
  return (
    <>
      <div className={`${styles.wave}`}>
        <div className={styles.wave1}></div>
        <div className={styles.wave2}></div>
        <div className={styles.wave3}></div>
      </div>
      <div className={styles.contentWave}>{children}</div>
      <div className={styles.reverseWave}>
        <div className={styles.wave1}></div>
        <div className={styles.wave2}></div>
        <div className={styles.wave3}></div>
      </div>
    </>
  );
}

export default WavesLight;
