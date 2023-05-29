import React, {useEffect, useState} from 'react';
import {isSafari} from "react-device-detect";
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
            <img src="/images/home/hero.svg" alt="picture"/>
          ) :
          isSafari ? (
            <video autoPlay loop muted>
              <source src={movVideo}
                      type="video/quicktime"/>
              <source src="/images/home/hero.svg" type="image/svg+xml"/>
            </video>
          ) : (
            <video autoPlay
                   loop
                   muted
            >
              <source src={webmVideo}
                      type="video/webm"/>
              <source src="/images/home/hero.svg" type="image/svg+xml"/>
            </video>
          )
      }
    </>
  );
};

export default HeroAnimation;