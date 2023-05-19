import React from 'react';
import styles from "./hero.module.scss";
import Button from "@/UI/Button/Button";
import GlowingStars from "@/components/GlowingStars/GlowingStars";
import {isSafari} from "react-device-detect";
import {motion, MotionValue} from "framer-motion";

interface y {
  y: MotionValue
}

const Hero = ({y}: y) => {
  const movVideo = '/animations/hero-animation.mov';
  const webmVideo = '/animations/hero-animation.webm';

  const showHero = {
    open: {
      opacity: 1,
      transition: {
        delay: 0.5
      }
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.section className={styles.hero}
                    initial="hidden"
                    variants={showHero}
                    animate="open"
    >
      <GlowingStars/>
      <div className="container">
        <div className={styles.hero__content}>
          <motion.div className={styles.hero__content_animation}
                      style={{y}}
          >
            {isSafari ? (
              <video autoPlay loop muted>
                <source src={movVideo} type="video/quicktime"/>
                Your browser does not support the video tag.
              </video>
            ) : (
              <video autoPlay loop muted>
                <source src={webmVideo} type="video/webm"/>
              </video>
            )}
          </motion.div>
          <motion.div style={{y}} className={styles.hero__content_description}>
            <p>
              Are you curious about what the future holds? Perhaps you&apos;re facing an important decision, or have
              questions that you&apos;re seeking answers to? Then Tarot is just what you need!
            </p>
            <Button className={"button button-light"} title={"Unlock the Secrets of the Tarot"}/>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;