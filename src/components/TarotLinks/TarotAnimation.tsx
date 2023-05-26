import React, {useEffect, useState} from "react";
import {useClassMobile} from "@/hooks/useClassMobile";

interface TarotAnimationProps{
  svg: string,
  webm: string,
  mp4:string
}

const TarotAnimation:React.FC<TarotAnimationProps> = ({svg, webm, mp4}) => {
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
      {isMobile ? (
        <img src={svg} alt="picture"/>
      ) : (
        <video autoPlay loop muted>
          <source src={webm} type="video/webm"/>
          <source src={mp4} type="video/mp4"/>
        </video>
      )}
    </>
  );
};

export default TarotAnimation;