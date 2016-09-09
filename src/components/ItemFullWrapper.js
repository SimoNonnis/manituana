import React, { PropTypes }  from 'react';

import ItemFull from './ItemFull';

import styles from './itemFullWrapper.css';

const ItemFullWrapper = (props) => {
  const item = props.buttons.map((item, i) => {
    if (props.params.link === item.link) {
      return (
        <ItemFull
          key={i+1}
          title={item.caption_en}
          image={item.image}
          fullDesc={item.full_desc_en}
        />
      )
    }

  });

  return (
    <div className={styles.container}>
      <div className={styles.scrollingContainer}>
        {item}
      </div>
    </div>
  )
};

ItemFullWrapper.propTypes = {
  buttons: PropTypes.array,
  params: PropTypes.object
};



export default ItemFullWrapper;
