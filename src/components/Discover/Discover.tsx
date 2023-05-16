import React from 'react';
import styles from "./discover.module.scss";
import Button from "@/UI/Button/Button";


const Discover = () => {
  return (
    <section className={styles.discover}>
      <div className="container">
        <div className={styles.discover__content}>
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
        </div>
      </div>
    </section>
  );
};

export default Discover;