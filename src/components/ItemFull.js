import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import styles from './itemFull.css';

const ItemFull = ({image, title, fullDesc}) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>
      <img src={image} alt={title} className={styles.image} />
      <span className={styles.content} >
      <h3>{title}</h3>
      <p className={styles.description}>{fullDesc}</p>
      </span>
    </div>
    <div className={styles.backBtn}>
      <Link to="/" className={styles.btn}>Back</Link>
    </div>
  </div>
)

ItemFull.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  fullDesc: PropTypes.string
}

export default ItemFull;
