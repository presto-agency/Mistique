import React, {useEffect, useState} from 'react';
import styles from "./hero.module.scss";
import Button from "@/components/UI/Button/Button";
import GlowingStars from "@/components/GlowingStars/GlowingStars";

const Hero = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined') {
      const userAgent = navigator.userAgent;
      setIsSafari(/^((?!chrome|android).)*safari/i.test(userAgent));
    }
  }, []);

  return (
    <section className={styles.hero}>
      <GlowingStars/>
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__content_animation}>
            {isSafari
              ? <img src="/images/home/hero.svg" alt="hero" />
              : (
                <video autoPlay loop muted>
                  <source src="/animations/hero-animation.webm" type="video/webm" />
                </video>
              )}
          </div>
          <div className={styles.hero__content_description}>
            <p>
              Are you curious about what the future holds? Perhaps you&apos;re facing an important decision, or have questions that you&apos;re seeking answers to? Then Tarot is just what you need!
            </p>
            <Button className={"button button-light"} title={"Unlock the Secrets of the Tarot"}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;