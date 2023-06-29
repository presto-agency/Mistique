import React, {useEffect} from "react";
import {isSafari} from "react-device-detect";
import {useClassMobile} from "@/hooks/useClassMobile";
import {toggleLoaded} from "@/store/reducers/toggleSlice";
import {useDispatch} from "react-redux";
import {motion, Variants} from "framer-motion";

interface SectionVariants{
  sectionVariants: Variants
}

const HeroAnimation:React.FC<SectionVariants> = ({sectionVariants}) => {
  const movVideo = "/animations/hero-animation.mov";
  const webmVideo = "/animations/hero-animation.webm";
  const isMobile = useClassMobile(false);
  const dispatch = useDispatch();

  const handleLoadedData: () => void = () => {
    dispatch(toggleLoaded())
  };

  useEffect(()=> {
    const video = 'dd'
  }, [])

  return (
    <>
      {
        isMobile ? (
            <img src="/images/home/hero.svg" alt="picture"/>
          ) :
          isSafari ? (
            <motion.video autoPlay loop muted onLoadedData={handleLoadedData}
                          initial="hidden"
                          animate={'visible'}
                          variants={sectionVariants}>
              <source src={movVideo}
                      type="video/quicktime"/>
              <source src="/images/home/hero.svg" type="image/svg+xml"/>
            </motion.video>
          ) : (
            <motion.video autoPlay loop muted onLoadedData={handleLoadedData}
                          initial="hidden"
                          animate={'visible'}
                          variants={sectionVariants}>
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