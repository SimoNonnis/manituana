import React from 'react';

import styles from './header.css';

const Header = () => (
  <div>
    <header className={styles.header}>
      <h1>ueni</h1>
    </header>
    <div className={styles.languageContainer}>
      <h2 className={styles.language}>Language</h2>
      <span className={styles.selectContainer}>
        <select className={styles.select}>
          <option defaultValue> Select Language </option>
          <option>English</option>
          <option>Italian</option>
          <option>Spanish</option>
        </select>
      </span>
    </div>
  </div>
)

export default Header;
