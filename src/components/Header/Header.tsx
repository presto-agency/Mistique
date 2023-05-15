import React, {useEffect, useState} from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Button from "@/components/UI/Button/Button";
import {useClassMobile} from "@/hooks/useClassMobile";
import BottomLinks from "@/components/BottomLinks/BottomLinks";
import {motion} from "framer-motion";
import {Navigation} from "@/exports/globalVars";

const Header = ({topNav, bottomNav}:Navigation) => {
  const isMobile = useClassMobile(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const variants = {
    closed: {
      height: 0,
      transition: {
        delay: 0.5
      }
    },
    open: {height: "auto"},
  };
  const innerVariants = {
    hidden: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: 0.5
      }
    },
    closed: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)"
    },
  };

  const headerActive = () => {
    setIsActive((prevState) => !prevState);
  }

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

  return (
    <>
      {isMobile
        ?<svg className="curtain curtain-top" viewBox="0 0 360 153" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_14526_6612)">
            <g clipPath="url(#clip1_14526_6612)">
              <path d="M-200.917 161.8C-203.322 162.622 -205.853 163.158 -208.468 162.872L-208.637 162.944C-209.143 162.908 -209.649 162.336 -209.944 161.908L-233.873 142.718L-240.863 -15.5L585.813 -15.4999L585.812 160.192L564.305 162.444C563.588 162.301 562.871 162.086 562.154 161.872L562.154 161.872C551.229 158.334 541.358 153.51 533.639 145.863C530.813 143.111 527.902 140.431 525.118 137.644C520.858 133.427 515.416 131.962 509.005 132.319C503.184 132.641 497.32 132.891 491.499 132.82C482.852 132.712 474.373 131.712 466.064 129.603C452.27 126.066 440.333 120.027 430.462 111.057C427.383 108.306 424.261 105.59 421.266 102.767C417.723 99.4434 413.463 98.4428 408.232 99.1575C400.597 100.23 392.92 101.123 385.243 101.766C359.175 103.946 336.86 96.8347 317.794 81.8619L317.447 81.5866C314.943 79.6023 312.387 77.5766 309.484 75.3225C299.867 76.0729 290.038 74.036 280.421 71.1772C269.707 67.9968 259.245 64.2447 249.67 58.956C246.38 57.1335 243.09 56.7047 239.42 57.9912C236.383 59.0632 233.346 59.9923 230.266 60.9571C216.515 65.3168 202.258 66.639 187.663 65.5312C185.132 65.3168 182.643 64.3519 180.112 64.3519C177.623 64.3877 175.092 65.3882 172.562 65.5669C157.798 66.6389 143.372 65.2453 129.494 60.6713C126.921 59.8136 124.263 59.1347 121.774 58.2056C117.809 56.7047 114.14 56.9548 110.596 59.1346C109.753 59.6349 108.825 60.0638 107.939 60.4926C95.9591 66.3173 83.3467 70.8914 69.8907 73.6787C63.5634 75.0008 57.1517 76.0729 51.4572 75.2867C48.1248 77.8239 45.2985 79.9322 42.5145 82.112C23.5327 96.8705 1.34522 103.946 -24.5123 101.802C-32.0207 101.159 -39.4871 100.158 -46.9954 99.3361C-48.1765 99.2289 -49.3997 99.086 -50.5807 98.9788C-53.66 98.6929 -56.3597 99.5148 -58.6375 101.266C-60.1561 102.409 -61.6325 103.66 -63.0667 104.911C-65.3445 106.912 -67.4957 109.02 -69.7314 111.021C-83.6936 123.564 -100.946 130.318 -120.982 132.283C-129.377 133.105 -137.813 133.248 -146.207 132.462C-154.475 131.676 -161.098 133.641 -166.244 139.216C-168.015 141.181 -170.082 142.932 -171.938 144.862C-179.615 152.938 -189.739 158.012 -200.917 161.8Z" fill="#BAA1C6"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_14526_6612">
              <rect width="360" height="153" fill="white"/>
            </clipPath>
            <clipPath id="clip1_14526_6612">
              <rect width="774" height="153" fill="white" transform="translate(-207)"/>
            </clipPath>
          </defs>
        </svg>
        :<svg className="curtain curtain-top" viewBox="0 0 1440 212" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_14526_6587)">
          <path
            d="M11.3168 209.861C6.84351 211.39 2.13477 212.387 -2.73083 211.855L-3.04468 211.988C-3.98645 211.922 -4.9281 210.858 -5.47742 210.06L-49.9958 174.359L-63 -120L1475 -120L1475 206.869L1434.99 211.058C1433.65 210.792 1432.32 210.393 1430.99 209.994L1430.98 209.994C1410.66 203.412 1392.29 194.437 1377.93 180.21C1372.68 175.09 1367.26 170.104 1362.08 164.918C1354.15 157.073 1344.03 154.348 1332.1 155.012C1321.27 155.611 1310.36 156.076 1299.53 155.943C1283.45 155.744 1267.67 153.882 1252.21 149.96C1226.55 143.378 1204.34 132.142 1185.98 115.455C1180.25 110.336 1174.44 105.283 1168.87 100.031C1162.28 93.848 1154.35 91.9865 1144.62 93.3161C1130.41 95.3106 1116.13 96.9727 1101.85 98.1694C1053.35 102.225 1011.83 88.9947 976.361 61.1383L975.729 60.6376C971.067 56.9421 966.307 53.17 960.901 48.9719C943.008 50.368 924.722 46.5785 906.829 41.2598C886.896 35.3428 867.434 28.3621 849.619 18.5226C843.498 15.132 837.376 14.3342 830.549 16.7276C824.898 18.7221 819.248 20.4507 813.519 22.2457C787.935 30.3567 761.41 32.8165 734.256 30.7556C729.548 30.3567 724.917 28.5616 720.209 28.5616C715.578 28.6281 710.87 30.4896 706.161 30.822C678.694 32.8165 651.854 30.2237 626.035 21.7138C621.248 20.1182 616.304 18.8551 611.674 17.1265C604.297 14.3342 597.469 14.7995 590.877 18.855C589.307 19.7858 587.581 20.5836 585.933 21.3814C563.645 32.2181 540.18 40.728 515.146 45.9137C503.374 48.3735 491.445 50.368 480.851 48.9054C474.651 53.6257 469.393 57.5482 464.213 61.6037C428.898 89.0612 387.619 102.225 339.512 98.2358C325.543 97.0391 311.652 95.1776 297.683 93.6485C295.486 93.449 293.21 93.1831 291.013 92.9837C285.284 92.4518 280.261 93.9809 276.023 97.2386C273.198 99.3661 270.451 101.693 267.783 104.02C263.545 107.743 259.543 111.665 255.384 115.388C229.407 138.724 197.31 151.289 160.033 154.946C144.416 156.475 128.72 156.741 113.103 155.278C97.7212 153.816 85.4 157.472 75.8257 167.844C72.5297 171.5 68.6842 174.758 65.2312 178.348C50.9482 193.373 32.1134 202.814 11.3168 209.861Z"
            fill="#BAA1C6"/>
        </g>
        <defs>
          <clipPath id="clip0_14526_6587">
            <rect width="1440" height="212" fill="white"/>
          </clipPath>
        </defs>
      </svg>
      }
      <header className={`${styles.header} ${isActive ? styles.active : ""}`}>
        <div className="container">
          {isMobile
            ? <nav className={styles.header__content}>
              <Link className={styles.header__content_logo} href='/'>
                <img src="/images/eye.svg" alt="logo"/>
              </Link>
              <div className={styles.menu}>
                <div className={styles.menu__wrapper}>
                  <motion.div className={styles.menu__wrapper_container}
                              variants={variants}
                              animate={isActive ? "open" : "closed"}
                              transition={{duration: 0.5}}
                  >
                    <motion.div className={styles.list}
                                variants={innerVariants}
                                initial="hidden"
                                animate={isActive ? "open" : "closed"}>
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
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              <div onClick={headerActive} className={styles.header__content_burger}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
            : <nav className={styles.header__content}>
              <Link className={styles.header__content_text} href="/">Join Mystique</Link>
              <div className={styles.header__content_links}>
                <Button className={"button _small"} title={"Go Tarot"}/>
                <Button className={"button _small _icon button-dark"} title={"Menu"}/>
              </div>
            </nav>
          }
        </div>
      </header>
    </>
  );
};

export default Header;