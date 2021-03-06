import React, { PropTypes }  from 'react';

import Item from './Item';

import styles from './list.css';

const List = ({ buttons }) => {
  const items = buttons.map((item, i) => {
    return (
      <Item
        key={i+1}
        link={item.link}
        title={item.caption_en}
        image={item.image}
        desc={item.description_en}
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

List.propTypes = {
  buttons: PropTypes.array
};



export default List;
