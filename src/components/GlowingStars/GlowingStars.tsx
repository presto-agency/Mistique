import React from 'react';
import styles from "./glowingStars.module.scss";

const GlowingStars = () => {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className={styles.stars__star}></div>
      ))}
    </div>
  );
};

export default GlowingStars;