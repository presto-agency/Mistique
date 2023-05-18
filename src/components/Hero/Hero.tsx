import React, {useEffect, useState} from 'react';
import styles from "./hero.module.scss";
import Button from "@/UI/Button/Button";
import GlowingStars from "@/components/GlowingStars/GlowingStars";
import {isSafari} from "react-device-detect";

const Hero = () => {
  const movVideo = '/animations/hero-animation.mov';
  const webmVideo = '/animations/hero-animation.webm';

  return (
    <section className={styles.hero}>
      <GlowingStars/>
      <div className="container">
        <div className={styles.hero__content}>
          <div className={styles.hero__content_animation}>
            {isSafari ? (
              <video autoPlay loop muted>
                <source src={movVideo} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <video autoPlay loop muted>
                <source src={webmVideo} type="video/webm" />
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