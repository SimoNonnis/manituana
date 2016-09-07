import React, { PropTypes } from 'react';

import styles from './item.css';

const Item = ({link, title, image, desc}) => (
  <a href={link} className={styles.container}>
    <img src={image} alt={title} className={styles.image} />
    <span className={styles.content} >
    <h3>{title}</h3>
    <p className={styles.description}>{desc}</p>
    </span>
  </a>
)

Item.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string
}

export default Item;
