import React from "react";
import {isSafari} from "react-device-detect";
import {useClassMobile} from "@/hooks/useClassMobile";
import {toggleLoaded} from "@/store/reducers/toggleSlice";
import {useDispatch} from "react-redux";

const HeroAnimation = () => {
  const movVideo = "/animations/hero-animation.mov";
  const webmVideo = "/animations/hero-animation.webm";
  const isMobile = useClassMobile(false);
  const dispatch = useDispatch();

  const handleLoadedData: () => void = () => {
    dispatch(toggleLoaded())
  };

  return (
    <>
      {
        isMobile ? (
            <img src="/images/home/hero.svg" alt="picture"/>
          ) :
          isSafari ? (
            <video autoPlay loop muted onLoadedData={handleLoadedData}>
              <source src={movVideo}
                      type="video/quicktime"/>
              <source src="/images/home/hero.svg" type="image/svg+xml"/>
            </video>
          ) : (
            <video autoPlay loop muted onLoadedData={handleLoadedData}>
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