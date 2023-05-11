import {useEffect, useState} from "react";
import {mobSize} from "@/exports/globalVars";

export const useClassMobile = (initialValue:boolean) => {
  const [isMobile, setIsMobile] = useState(initialValue);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= mobSize);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}