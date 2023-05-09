import React from 'react';
import * as styles from "./bottomLinks.module.scss";
import Link from "next/link";

const BottomLinks = ({bottomNav}) => {
  return (
    <div className={styles.bottom}>
      <ul>
        {bottomNav.map(item => (
          <li className="nav-link" key={item.id}>
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        © 2023 Untitled UI. All rights reserved.
      </p>
    </div>
  );
};

export default BottomLinks;