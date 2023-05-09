import React from 'react';
import * as styles from "./header.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import {useClassMobile} from "@/hooks/useClassMobile";


const Header = () => {
  const isMobile = useClassMobile(false);

  return (
    <>
      <img src={isMobile
        ? "/images/curtain-top-mob.png"
        : "/images/curtain-top.png"
      } className="curtain curtain-top"></img>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.header__content}>
            {isMobile
              ? <Link className={styles.logoMobile} href='/'>
                  <img src="/images/eye.svg" alt="logo"/>
                </Link>
              : <Link className={styles.logo} href='/'>Join Mystique</Link>
            }
            {isMobile
              ? <div className={styles.burger}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              : <div className={styles.header__content_links}>
                  <Button className={'button _small'} title={'Go Tarot'}/>
                  <Button className={'button _small _icon button-dark'} title={'Menu'}/>
                </div>
            }
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;