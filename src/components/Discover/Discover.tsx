import React from "react";
import styles from "./discover.module.scss";
import Button from "@/UI/Button/Button";
import {MotionValue, motion} from "framer-motion";

interface y {
  y: MotionValue
}

const Discover: React.FC<y> = ({y}) => {
  const discoverLinks = [
    {
      id: 1,
      url: "/images/home/major.svg",
      title: "Major Arcana",
      description: {
        top: "See the meaning of the",
        bottom: "22 major arcana"
      }
    },
    {
      id: 2,
      url: "/images/home/minor.svg",
      title: "Minor Arcana",
      description: {
        top: "See the meaning of the",
        bottom: "56 major arcana"
      }
    },
  ];

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
            {discoverLinks.map(item => (
              <li key={item.id}>
                <img src={item.url} alt="logo"/>
                <h2>
                  {item.title}
                </h2>
                <p>
                  {item.description.top}
                  <br/>
                  <strong>{item.description.bottom}</strong>
                </p>
                <Button className={"button button-light"} title={"Read more"}/>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Discover;