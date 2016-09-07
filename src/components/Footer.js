import React from 'react';

import styles from './footer.css';

const Footer = () => (
  <div className={styles.container}>
    <button className={styles.buttons}>Favorites</button>
    <button className={styles.buttons}>Sign In</button>
  </div>
)

export default Footer;
