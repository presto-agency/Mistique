import React from 'react';
import * as styles from "./header.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";


const Header = () => {
  return (
    <>
      <img src="/images/curtain-top.png" className="curtain curtain-top"></img>
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.header__content}>
            <Link className={styles.logo} href='/'>
              Join Mystique
            </Link>
            <div className={styles.header__content_links}>
              <Button className={'button _small'} title={'Go Tarot'}/>
              <Button className={'button _small _icon button-dark'} title={'Menu'}/>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;