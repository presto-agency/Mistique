import React, {useEffect, useState} from 'react';
import * as styles from "./header.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import {useClassMobile} from "@/hooks/useClassMobile";
import BottomLinks from "@/components/BottomLinks/BottomLinks";

const Header = () => {
  const isMobile = useClassMobile(false);
  const [isActive, setIsActive] = useState<boolean>(false);
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

  const headerActive = () => {
    setIsActive((prevState) => !prevState);
  }

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

  return (
    <>
      {!isMobile && <img src="/images/curtain-top.png" className="curtain curtain-top"></img>}
      <header className={`${styles.header} ${isActive ? styles.active : ''}`}>
        <div className="container">
          {isMobile
            ? <nav className={styles.header__content}>
              <Link className={styles.header__content_logo} href='/'>
                <img src="/images/eye.svg" alt="logo"/>
              </Link>
              <div className={styles.menu}>
                <div className={styles.menu__wrapper}>
                  <ul>
                    {topNav.map(item => (
                      <li key={item.id}>
                        <Link href={item.url}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <Button className={isMobile ? 'button button-dark' : 'button'}
                          title={'Get answers - Tarot reading now!'}/>
                  <BottomLinks bottomNav={bottomNav}/>
                </div>
              </div>
              <div onClick={headerActive} className={styles.header__content_burger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
            : <nav className={styles.header__content}>
              <Link className={styles.header__content_text} href='/'>Join Mystique</Link>
              <div className={styles.header__content_links}>
                <Button className={'button _small'} title={'Go Tarot'}/>
                <Button className={'button _small _icon button-dark'} title={'Menu'}/>
              </div>
            </nav>
          }
        </div>
      </header>
    </>
  );
};

export default Header;