import React from 'react';
import * as styles from "./header.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.header__content}>
          <Link href='/'>
            Join Mystique
          </Link>
          <div className={styles.header__content_links}>
            <Button className={'button _small'} title={'Go Tarot'}/>
            <Button className={'button _small _icon button-dark'} title={'Menu'}/>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;