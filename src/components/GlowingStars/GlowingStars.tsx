import React from 'react';
import styles from "./glowingStars.module.scss";

const GlowingStars = () => {
  return (
    <div className={styles.stars}>
      <div className={styles.stars__star}></div>
      <div className={styles.stars__star}></div>
      <div className={styles.stars__star}></div>
      <div className={styles.stars__star}></div>
      <div className={styles.stars__star}></div>
      <div className={styles.stars__star}></div>
    </div>
  );
};

export default GlowingStars;