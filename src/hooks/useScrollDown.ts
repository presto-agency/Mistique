import React, {useEffect, useState} from "react";

export const useScrollDown = (initialValue: boolean) => {
  const [isScrolledDown, setIsScrolledDown] = useState(initialValue);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      if (Math.abs(currentScrollPos - prevScrollPos) > 80) {
        setIsScrolledDown(!(isScrollingDown && currentScrollPos > 0));
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return isScrolledDown;
};

