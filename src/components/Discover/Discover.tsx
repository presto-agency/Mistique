import React from 'react';
import styles from "./discover.module.scss";
import Button from "@/UI/Button/Button";
import {MotionValue, motion} from "framer-motion";

interface y {
  y: MotionValue
}

const Discover = ({y}: y) => {
  return (
    <section className={styles.discover}>
      <img src="/images/home/stars-3.svg" alt="stars" className={styles.discover__stars}/>
      <img src="/images/home/stars-bg.svg" alt="stars" className={styles.discover__bg}/>
      <div className="container">
        <motion.div className={styles.discover__content}
                    style={{y}}
        >
          <p>
            <small>
              Mystique Tarot
            </small>
          </p>
          <p>
            <strong>
              Discover the 78 cards of<br/> the Tarot deck
            </strong>
          </p>
          <ul>
            <li>
              <img src="/images/home/major.svg" alt="logo"/>
              <h2>
                Major Arcana
              </h2>
              <p>
                See the meaning of the<br/>
                <strong>22 major arcana</strong>
              </p>
              <Button className={"button button-light"} title={"Read more"}/>
            </li>
            <li>
              <img src="/images/home/minor.svg" alt="logo"/>
              <h2>
                Minor Arcana
              </h2>
              <p>
                See the meaning of the<br/>
                <strong>56 major arcana</strong>
              </p>
              <Button className={"button button-light"} title={"Read more"}/>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Discover;