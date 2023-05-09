import React, {useState} from 'react';
import * as styles from "./header.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import {useClassMobile} from "@/hooks/useClassMobile";

const Header = () => {
  const isMobile = useClassMobile(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const headerActive = () => {
    setIsActive(prevState => !prevState);
  }

  return (
    <>
      <img src={isMobile
        ? "/images/curtain-top-mob.png"
        : "/images/curtain-top.png"
      } className="curtain curtain-top"></img>
      <header className={`${styles.header} ${isActive ? styles.active : ''}`}>
        <div className="container">
          {isMobile
            ? <nav className={styles.header__content}>
              <Link className={styles.header__content_logo} href='/'>
                <img src="/images/eye.svg" alt="logo"/>
              </Link>
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