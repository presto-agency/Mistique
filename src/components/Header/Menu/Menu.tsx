import React from "react";
import {AnimatePresence, motion, Variants} from "framer-motion";
import styles from "@/components/Header/Menu/menu.module.scss";
import Link from "next/link";
import Button from "@/UI/Button/Button";
import BottomLinks from "@/components/BottomLinks/BottomLinks";
import {Links} from "@/exports/globalVars";
import {useSelector} from "react-redux";

interface Menu {
  topNav: Links[],
  isMobile: boolean,
  bottomNav: Links[]
}

type ToggleState = {
  toggle: {
    isActive: boolean;
  };
};

const Menu: React.FC<Menu> = ({
                                topNav,
                                isMobile,
                                bottomNav
                              }) => {
  const isActive = useSelector<ToggleState>((state) => state.toggle.isActive) as boolean;

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


  return (
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
  );
};

export default Menu;