import React, {useEffect, useState} from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Button from "@/UI/Button/Button";
import {useClassMobile} from "@/hooks/useClassMobile";
import BottomLinks from "@/components/BottomLinks/BottomLinks";
import {AnimatePresence, motion} from "framer-motion";
import {Navigation} from "@/exports/globalVars";
import CurtainTop from "@/components/Header/CurtainTop";

const Header = ({topNav, bottomNav}: Navigation) => {
  const isMobile = useClassMobile(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const [isScrolledDown, setIsScrolledDown] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const showMenu = {
    open: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    hidden: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)"
    },
  };

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsScrolledDown(!(isScrollingDown && currentScrollPos > 0));
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  return (
    <>
      <CurtainTop isScrolledDown={isScrolledDown}/>
      <header className={`${styles.header} ${isActive ? styles.active : ""}`}>
        <div className="container">
          {isMobile
            ? <nav className={styles.header__content}>
              <Link className={styles.header__content_logo} href='/'>
                <img src="/images/eye.svg" alt="logo"/>
              </Link>
              <AnimatePresence>
                {isActive &&
                  (<motion.div className={styles.menu}
                               variants={showMenu}
                               initial="hidden"
                               animate="open"
                               exit="hidden">
                      <div className={styles.menu__wrapper}>
                        <div className={styles.menu__wrapper_container}>
                          <div className={styles.list}>
                            <ul>
                              {topNav.map(item => (
                                <li key={item.id}>
                                  <Link href={item.url}>{item.title}</Link>
                                </li>
                              ))}
                            </ul>
                            <Button className={isMobile
                              ? "button button-dark"
                              : "button"}
                                    title={"Get answers - Tarot reading now!"}/>
                            <BottomLinks bottomNav={bottomNav}/>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
              <div onClick={() => setIsActive(!isActive)} className={styles.header__content_burger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
            : <motion.nav className={styles.header__content}
                          initial="hidden"
                          animate={isScrolledDown ? 'open' : 'hidden'}
                          variants={showMenu}
                          transition={{ duration: 0.5 }}
            >
              <Link className={styles.header__content_text} href="/">Join Mystique</Link>
              <div className={styles.header__content_links}>
                <Button className={"button _small"} title={"Go Tarot"}/>
                <Button className={"button _small _icon button-dark"} title={"Menu"}/>
              </div>
            </motion.nav>
          }
        </div>
      </header>
    </>
  );
};

export default Header;