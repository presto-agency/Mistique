import React, {useEffect} from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Button from "@/UI/Button/Button";
import {useClassMobile} from "@/hooks/useClassMobile";
import {useScrollDown} from "@/hooks/useScrollDown";
import {motion} from "framer-motion";
import {Links} from "@/exports/globalVars";
import CurtainTop from "@/components/Header/CurtainTop";
import Menu from "@/components/Header/Menu/Menu";
import {useDispatch, useSelector} from "react-redux";
import {toggleActive} from "@/store/reducers/toggleSlice";

interface Header {
  topNav: Links[],
  bottomNav: Links[],
}

type ToggleState = {
  toggle: {
    isActive: boolean;
  };
};

const Header: React.FC<Header> = ({
                                    topNav,
                                    bottomNav,
                                  }) => {
  const isMobile = useClassMobile(false);
  const isScrolledDown = useScrollDown(true);
  const isActive = useSelector<ToggleState>((state) => state.toggle.isActive);
  const dispatch = useDispatch();

  const changeActiveClass = () => {
    dispatch(toggleActive());
  };

  const showHeader = {
    open: {
      opacity: 1,
      transition: {
        delay: 0.5,
      }
    },
    hidden: {
      opacity: 0,
    },
  };

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

  return (
    <>
      <CurtainTop isScrolledDown={isScrolledDown}/>
      <motion.header className={`${styles.header} ${isActive ? styles.active : ""}`}
                     initial="hidden"
                     animate={isScrolledDown ? 'open' : 'hidden'}
                     style={{pointerEvents: isScrolledDown ? 'initial' : 'none'}}
                     variants={showHeader}
      >
        <div className="container">
          {isMobile
            ? <nav className={styles.header__content}>
              <Link className={styles.header__content_logo} href='/'>
                <img src="/images/eye.svg" alt="logo"/>
              </Link>
              <div onClick={changeActiveClass}
                   className={styles.header__content_burger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
            : <nav className={styles.header__content}>
              <Link className={styles.header__content_text}
                    href="/">Join Mystique</Link>
              <div className={styles.header__content_links}>
                <Button className={"button _small"} title={"Go Tarot"}/>
                <Button handleClick={changeActiveClass}
                        className={"button _small _icon button-dark"}
                        title={"Menu"}
                        isLink={false}/>
              </div>
            </nav>
          }
        </div>
        <Menu topNav={topNav}
              isMobile={isMobile}
              bottomNav={bottomNav}/>
      </motion.header>
    </>
  );
};

export default Header;