import React from "react";
import Link from "next/link";
import styles from "./tarotLinks.module.scss";
import {MotionValue, motion, Variants} from "framer-motion";
import dynamic from "next/dynamic";
import {useInView} from "react-intersection-observer";
import {useSelector} from "react-redux";
import {Links, LinksRes} from "@/exports/globalVars";

type HeroContent = {
  heroContent: {
    navigation: {
      tarotLinks: Links[]
    }
  }
}

type Nav = {
  tarotLinks: LinksRes[]
}

interface TarotAnimationProps {
  svg: string,
  webm: string,
  mp4: string
}

interface y {
  y: MotionValue,
  sectionVariants: Variants
}

const DynamicComponent = dynamic<TarotAnimationProps>(() => import("./TarotAnimation"), {
  ssr: false,
});

const TarotLinks: React.FC<y> = ({y, sectionVariants}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const navigation = useSelector<HeroContent>((state) => state.heroContent.navigation) as Nav;
  return (
    <motion.section className={styles.tarot}
                    style={{y}}
    >
      <motion.div className="container"
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={sectionVariants}
      >
        <ul className={styles.links}>
          {navigation.tarotLinks.map(item => (
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
      </motion.div>
    </motion.section>
  );
};

export default TarotLinks;