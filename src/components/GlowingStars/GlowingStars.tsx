import React from "react";
import styles from "./glowingStars.module.scss";

const GlowingStars = () => {

  const stars = Array.from({length: 5}, (_, index) =>
    <div
      key={index}
      className={styles.stars__star}>
    </div>);

  return <>{stars}</>;
};

export default GlowingStars;