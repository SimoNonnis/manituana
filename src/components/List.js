import React from 'react';

import DATA from 'json!../data/DATA.json';

import Item from './Item';

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
          key={i}
          link={item.link}
          title={item.caption_en}
          image={item.image}
          desc={item.description_en}
        />
      )
    });

    return (
      <div>
        {items}
      </div>

    )
  }
}


export default List;
