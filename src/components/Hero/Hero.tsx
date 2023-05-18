import React from 'react';
import styles from "./hero.module.scss";
import Button from "@/UI/Button/Button";
import GlowingStars from "@/components/GlowingStars/GlowingStars";

const Hero = () => {

  return (
    <section className={styles.hero}>
      <GlowingStars/>
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__content_animation}>
            <video autoPlay loop muted>
              <source src="/animations/hero-animation.mov" type="video/quicktime"/>
              <source src="/animations/hero-animation.mov" type="video/quicktime"/>
            </video>
          </div>
          <div className={styles.hero__content_description}>
            <p>
              Are you curious about what the future holds? Perhaps you&apos;re facing an important decision, or have
              questions that you&apos;re seeking answers to? Then Tarot is just what you need!
            </p>
            <Button className={"button button-light"} title={"Unlock the Secrets of the Tarot"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;