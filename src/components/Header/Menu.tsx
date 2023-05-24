import React from 'react';
import {AnimatePresence, motion, MotionStyle, Variants} from "framer-motion";
import styles from "@/components/Header/header.module.scss";
import Link from "next/link";
import Button from "@/UI/Button/Button";
import BottomLinks from "@/components/BottomLinks/BottomLinks";
import {Links} from "@/exports/globalVars";

interface Menu {
  isActive: boolean,
  showMenu: Variants,
  topNav: Links[],
  isMobile: boolean,
  bottomNav: Links[]
}

const Menu = ({isActive, showMenu, topNav, isMobile, bottomNav}: Menu) => {
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