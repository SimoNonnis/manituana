import React from 'react';

import DATA from 'json!../data/DATA.json';
import Item from './Item';

import styles from './list.css';

class List extends React.Component {
  constructor () {
    super();
    this.state = {
      buttons: [ DATA.buttons ]
    }
  }

  render () {
    const buttons = this.state.buttons[0];
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
  }
}


export default List;
