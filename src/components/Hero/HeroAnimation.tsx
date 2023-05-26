import React, {useEffect, useState} from 'react';
import {isSafari} from "react-device-detect";
import {motion} from "framer-motion";
import {useClassMobile} from "@/hooks/useClassMobile";


const HeroAnimation = () => {
  const movVideo = '/animations/hero-animation.mov';
  const webmVideo = '/animations/hero-animation.webm';
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useClassMobile(false);


  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null
  }

  return (
    <>
      {
        isMobile ? (
            <motion.img src="/images/home/hero.svg" alt="picture"
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {delay: 1, duration: 1.5}}}
            />
          ) :
          isSafari ? (
            <motion.video autoPlay loop muted
                          initial={{opacity: 0}}
                          animate={{opacity: 1, transition: {delay: 1, duration: 1.5}}}
            >
              <source src={movVideo}
                      type="video/quicktime"/>
              <source src="/images/home/hero.svg" type="image/svg+xml"/>
            </motion.video>
          ) : (
            <motion.video autoPlay
                          loop
                          muted
                          initial={{opacity: 0}}
                          animate={{opacity: 1, transition: {delay: 1, duration: 1.5}}}
            >
              <source src={webmVideo}
                      type="video/webm"/>
              <source src="/images/home/hero.svg" type="image/svg+xml"/>
            </motion.video>
          )
      }
    </>
  );
};

export default HeroAnimation;