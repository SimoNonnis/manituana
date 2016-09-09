import React, { PropTypes }  from 'react';

import ItemFull from './ItemFull';

import styles from './itemFullWrapper.css';

const ItemFullWrapper = ({ buttons }) => {
  const items = buttons.map((item, i) => {
    return (
      <ItemFull
        key={i+1}
        link={item.link}
        title={item.caption_en}
        image={item.image}
        fullDesc={item.full_desc_en}
      />
    )
  });

  return (
    <div className={styles.container}>
      <div className={styles.scrollingContainer}>
        {items}
      </div>
    </div>
  )
};

ItemFullWrapper.propTypes = {
  buttons: PropTypes.array
};



export default ItemFullWrapper;
