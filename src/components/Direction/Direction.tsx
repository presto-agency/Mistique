import React from 'react';
import styles from "./direction.module.scss";
import Button from "@/UI/Button/Button";
import GlowingStars from "@/components/GlowingStars/GlowingStars";
import {MotionValue, motion} from "framer-motion";

interface y {
  y: MotionValue
}

const Direction = ({y}: y) => {
  return (
    <section className={styles.direction}>
      <GlowingStars/>
      <img src="/images/home/stars-4.svg" alt="stars" className={styles.direction__stars}/>
      <div className="container">
        <motion.div className={styles.direction__content}
                    style={{y}}
        >
          <div className={styles.direction__content_img}>
            <img src="/images/home/picture.png" alt="hero"/>
          </div>
          <div className={styles.direction__content_description}>
            <h2>
              How Tarot Can Help You Find Clarity and Direction in Life
            </h2>
            <p>
              Tarot has been used for centuries as a tool for divination, self-discovery, and guidance. It consists of a
              deck of 78 cards, each with its own unique symbolism and meaning. Many people turn to Tarot when they are
              seeking answers to life&apos;s big questions, or when they feel stuck
            </p>
            <p>
              One of the great things about Tarot is that it can help you gain clarity and direction in your life. The
              cards can provide insights into your current situation, as well as offer guidance on how to move forward.
              Whether you&apos;re dealing with a difficult decision, a challenging relationship, or simply feeling lost,
              Tarot can help you gain a fresh perspective and make more informed choices.
            </p>
            <Button className={"button _primary"} title={"Read more"}/>
            <Button className={"button button-light"} title={"More articles"}/>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Direction;