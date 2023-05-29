import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Button from "@/UI/Button/Button";
import {useClassMobile} from "@/hooks/useClassMobile";
import BottomLinks from "@/components/BottomLinks/BottomLinks";
import {Links} from "@/exports/globalVars";
import CurtainBottom from "@/components/Footer/CurtainBottom";
import {useSelector} from "react-redux";

type HeroContent = {
  heroContent: {
    navigation: {
      topNav: Links[],
      bottomNav: Links[]
    }
  }
}

type Navigation = {
  topNav: Links[],
  bottomNav: Links[]
}

const Footer: React.FC = () => {

  const isMobile = useClassMobile(false);
  const navigation = useSelector<HeroContent>((state) => state.heroContent.navigation) as Navigation;

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
                {navigation.topNav.map(item => (
                  <li className="nav-link" key={item.id}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <Button className={isMobile ? "button button-dark" : "button"}
                      title={"Get answers - Tarot reading now!"}/>
            </div>
            <BottomLinks bottomNav={navigation.bottomNav}/>
          </div>
        </div>
      </footer>
      <CurtainBottom/>
    </>
  );
};

export default Footer;