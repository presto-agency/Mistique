import React from 'react';
import Link from "next/link";
import styles from "./tarotLinks.module.scss";
import {MotionValue, motion} from "framer-motion";

interface y {
  y: MotionValue
}

const TarotLinks: React.FC<y> = ({y}) => {
  const tarotLinks = [
    {
      id: 1,
      url: "/LatinTarot",
      title: "Latin Tarot",
      resource: {
        webm: '/animations/1.webm',
        mp4: '/animations/1_1.mp4'
      }
    },
    {
      id: 2,
      url: "/LoveTarot",
      title: "Love Tarot",
      resource: {
        webm: '/animations/3.webm',
        mp4: '/animations/3_3.mp4'
      }
    },
    {
      id: 3,
      url: "/YesNoTarot",
      title: "Yes / No Tarot",
      resource: {
        webm: '/animations/2.webm',
        mp4: '/animations/2_2.mp4'
      }
    }
  ];

  return (
    <motion.section className={styles.tarot}
                    style={{y}}
    >
      <div className="container">
        <ul className={styles.links}>
          {tarotLinks.map(item => (
            <li className={styles.links__item} key={item.id}>
              <Link href={item.url}>
                <div className={styles.links__item_animation}>
                  <video autoPlay loop muted>
                    <source src={item.resource.webm} type="video/webm"/>
                    <source src={item.resource.mp4} type="video/mp4"/>
                  </video>
                </div>
                <p>
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default TarotLinks;