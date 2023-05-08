import React from "react";
import * as styles from "./footer.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";


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

  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__content}>
            <div className={styles.footer__content_top}>
              <a href="#">
                <img src="/images/footer/eye.svg" alt="picture"/>
              </a>
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
              <Button title={'Get answers - Tarot reading now!'}/>
            </div>
            <div className={styles.footer__content_bottom}>
              <ul>
                {bottomNav.map(item => (
                  <li className="nav-link" key={item.id}>
                    <Link href={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <p>
                © 2023 Untitled UI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*<img src="/images/footer/curtain.png" className="curtain bottom"></img>*/}
    </>
  );
};

export default Footer;