import React from "react";
import styles from "./hero.module.scss";
import Button from "@/UI/Button/Button";
import GlowingStars from "@/components/GlowingStars/GlowingStars";
import {motion, MotionValue} from "framer-motion";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./HeroAnimation"), {
  ssr: false,
});

interface y {
  y: MotionValue
}

const Hero = ({y}: y) => {

  return (
    <section className={styles.hero}>
      <GlowingStars/>
      <div className="container">
        <motion.img className={styles.hero__stars}
                    src="/images/home/stars-1.svg"
                    alt="stars"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 1}}}
        />
        <motion.img className={styles.hero__stars}
                    src="/images/home/stars-2.svg" alt="stars"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition:{duration: 1}}}
        />
        <div className={styles.hero__content}>
          <motion.div className={styles.hero__content_animation}
                      style={{y}}
          >
            <DynamicComponent/>
          </motion.div>
          <motion.div style={{y}}
                      className={styles.hero__content_description}>
            <p>
              Are you curious about what the future holds? Perhaps you&apos;re facing an important decision, or have
              questions that you&apos;re seeking answers to? Then Tarot is just what you need!
            </p>
            <Button className={"button button-light"}
                    title={"Unlock the Secrets of the Tarot"}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;