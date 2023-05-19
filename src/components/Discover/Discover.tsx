import React from 'react';
import styles from "./discover.module.scss";
import Button from "@/UI/Button/Button";
import {MotionValue, motion} from "framer-motion";

interface y {
  y: MotionValue
}


const Discover = ({y}:y) => {
  return (
    <section className={styles.discover}>
      <div className="container">
        <div className={styles.discover__content}>
          <motion.p
            style={{y}}
          >
            <small>
              Mystique Tarot
            </small>
          </motion.p>
          <motion.p
            style={{y}}
          >
            <strong>
              Discover the 78 cards of<br/> the Tarot deck
            </strong>
          </motion.p>
          <ul>
            <motion.li
              style={{y}}
            >
              <img src="/images/home/major.svg" alt="logo"/>
              <h2>
                Major Arcana
              </h2>
              <p>
                See the meaning of the<br/>
                <strong>22 major arcana</strong>
              </p>
              <Button className={"button button-light"} title={"Read more"}/>
            </motion.li>
            <motion.li
              style={{y}}
            >
              <img src="/images/home/minor.svg" alt="logo"/>
              <h2>
                Minor Arcana
              </h2>
              <p>
                See the meaning of the<br/>
                <strong>56 major arcana</strong>
              </p>
              <Button className={"button button-light"} title={"Read more"}/>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Discover;