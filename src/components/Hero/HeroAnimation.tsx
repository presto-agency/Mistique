import React, {useEffect, useState} from 'react';
import {isSafari} from "react-device-detect";
import {motion} from "framer-motion";


const HeroAnimation = () => {
  const movVideo = '/animations/hero-animation.mov';
  const webmVideo = '/animations/hero-animation.webm';
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null
  }

  return (
    <>
      {isSafari ? (
        <motion.video autoPlay loop muted
                      initial={{opacity: 0}}
                      animate={{opacity: 1, transition:{delay:1, duration: 1.5}}}
        >
          <source src={movVideo}
                  type="video/quicktime"/>
          Your browser does not support the video tag.
        </motion.video>
      ) : (
        <motion.video autoPlay
                      loop
                      muted
                      initial={{opacity: 0}}
                      animate={{opacity: 1, transition:{delay:1, duration: 1.5}}}
        >
          <source src={webmVideo}
                  type="video/webm"/>
        </motion.video>
      )}
    </>
  );
};

export default HeroAnimation;