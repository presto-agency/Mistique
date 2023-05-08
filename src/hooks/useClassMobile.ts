import {useEffect, useState} from "react";
import {mobSize} from "@/pages/globalVars";

export const useClassMobile = (initialValue) => {
  const [isMobile, setIsMobile] = useState(initialValue);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < mobSize);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}