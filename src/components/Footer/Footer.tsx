import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Button from "@/UI/Button/Button";
import {useClassMobile} from "@/hooks/useClassMobile";
import BottomLinks from "@/components/BottomLinks/BottomLinks";
import {Navigation} from "@/exports/globalVars";
import CurtainBottom from "@/components/Footer/CurtainBottom";

const Footer = ({
                  topNav,
                  bottomNav
                }: Navigation) => {

  const isMobile = useClassMobile(false);

  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__content}>
            <div className={styles.footer__content_top}>
              <Link className={styles.logo} href="#">
                <img src="/images/eye.svg" alt="logo"/>
              </Link>
              <h2>
                Join Mystique
              </h2>
              <ul>
                {topNav.map(item => (
                  <li className="nav-link" key={item.id}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <Button className={isMobile ? "button button-dark" : "button"}
                      title={"Get answers - Tarot reading now!"}/>
            </div>
            <BottomLinks bottomNav={bottomNav}/>
          </div>
        </div>
      </footer>
      <CurtainBottom/>
    </>
  );
};

export default Footer;