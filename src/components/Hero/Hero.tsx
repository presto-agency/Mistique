import React from 'react';
import styles from "./hero.module.scss";
import Button from "@/UI/Button/Button";
import GlowingStars from "@/components/GlowingStars/GlowingStars";
import {motion, MotionValue} from "framer-motion";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('./HeroAnimation'), {
  ssr: false,
});

interface y {
  y: MotionValue
}

const Hero = ({y}: y) => {
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
        <img className={styles.hero__stars} src="/images/home/stars-1.svg" alt="stars"/>
        <img className={styles.hero__stars} src="/images/home/stars-2.svg" alt="stars"/>
        <div className={styles.hero__content}>
          <motion.div className={styles.hero__content_animation}
                      style={{y}}
          >
            <DynamicComponent/>
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