import React from "react";
import styles from "./hero.module.scss";
import Button from "@/UI/Button/Button";
import GlowingStars from "@/components/GlowingStars/GlowingStars";
import {motion, MotionValue, Variants} from "framer-motion";
import dynamic from "next/dynamic";
import {useInView} from "react-intersection-observer";

const DynamicComponent = dynamic(() => import("./HeroAnimation"), {
  ssr: false,
});

interface y {
  y: MotionValue,
  sectionVariants: Variants
  }

const Hero: React.FC<y> = ({y, sectionVariants}) => {
  const animationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className={styles.hero}>
      <GlowingStars/>
      <motion.img className={styles.hero__stars}
                  src="/images/home/stars-1.svg"
                  alt="stars"
                  initial={animationProps.initial}
                  animate={animationProps.animate}
      />
      <motion.img className={styles.hero__stars}
                  src="/images/home/stars-2.svg" alt="stars"
                  initial={animationProps.initial}
                  animate={animationProps.animate}
      />
      <div className="container" ref={ref}>
        <motion.div className={styles.hero__content} style={{y}}>
          <div className={styles.hero__content_animation}>
            <DynamicComponent sectionVariants={sectionVariants}/>
          </div>
          <div
            className={styles.hero__content_description}>
            <p>
              Are you curious about what the future holds? Perhaps you&apos;re facing an important decision, or have
              questions that you&apos;re seeking answers to? Then Tarot is just what you need!
            </p>
            <Button className={"button button-light"}
                    title={"Unlock the Secrets of the Tarot"}/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;