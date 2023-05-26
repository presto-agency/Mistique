import React from 'react';
import Link from "next/link";
import styles from "./tarotLinks.module.scss";
import {MotionValue, motion} from "framer-motion";
import dynamic from "next/dynamic";

interface TarotAnimationProps{
  svg: string,
  webm: string,
  mp4:string
}

interface y {
  y: MotionValue
}

const DynamicComponent = dynamic<TarotAnimationProps>(() => import("./TarotAnimation"), {
  ssr: false,
});


const TarotLinks: React.FC<y> = ({y}) => {

  const tarotLinks = [
    {
      id: 1,
      url: "/LatinTarot",
      title: "Latin Tarot",
      resource: {
        webm: '/animations/1.webm',
        mp4: '/animations/1_1.mp4',
        svg: '/images/home/tarot-1.svg'
      }
    },
    {
      id: 2,
      url: "/LoveTarot",
      title: "Love Tarot",
      resource: {
        webm: '/animations/3.webm',
        mp4: '/animations/3_3.mp4',
        svg: '/images/home/tarot-2.svg'
      }
    },
    {
      id: 3,
      url: "/YesNoTarot",
      title: "Yes / No Tarot",
      resource: {
        webm: '/animations/2.webm',
        mp4: '/animations/2_2.mp4',
        svg: '/images/home/tarot-3.svg'
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
                  <DynamicComponent
                    svg={item.resource.svg}
                    webm={item.resource.webm}
                    mp4={item.resource.mp4}
                  />
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