import React, {useEffect, useState} from 'react';
import {isSafari} from "react-device-detect";

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
        <video autoPlay loop muted>
          <source src={movVideo} type="video/quicktime"/>
          Your browser does not support the video tag.
        </video>
      ) : (
        <video autoPlay loop muted>
          <source src={webmVideo} type="video/webm"/>
        </video>
      )}
    </>
  );
};

export default HeroAnimation;