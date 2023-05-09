import React, {useEffect, useState} from "react";
import * as styles from "./footer.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import {useClassMobile} from "@/hooks/useClassMobile";
import BottomLinks from "@/components/BottomLinks/BottomLinks";


const Footer = () => {
  const topNav = [
    {
      id: 1,
      url: '/',
      title: 'Home'
    },
    {
      id: 2,
      url: '/TarotReading',
      title: 'Tarot reading'
    },
    {
      id: 3,
      url: '/Blog',
      title: 'Blog'
    },
    {
      id: 4,
      url: '/Help',
      title: 'Help'
    },
    {
      id: 5,
      url: '/Privacy',
      title: 'Privacy'
    },
  ];
  const bottomNav = [
    {
      id: 1,
      url: '/Terms',
      title: 'Terms'
    },
    {
      id: 2,
      url: '/Privacy',
      title: 'Privacy'
    },
    {
      id: 3,
      url: '/Cookies',
      title: 'Cookies'
    },
  ];

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
              <Button className={isMobile ? 'button button-dark' : 'button'}
                      title={'Get answers - Tarot reading now!'}/>
            </div>
            <BottomLinks bottomNav={bottomNav}/>
          </div>
        </div>
      </footer>
      <img src={isMobile
        ? "/images/curtain-bottom-mob.png"
        : "/images/curtain-bottom.png"
      } className="curtain curtain-bottom"></img>
    </>
  );
};

export default Footer;