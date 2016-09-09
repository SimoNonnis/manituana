import React, { PropTypes } from 'react';

import DATA from 'json!../data/DATA.json';
import Header from './Header';
import Footer from './Footer';

import styles from './app.css';


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      buttons: [ DATA.buttons ]
    }
  }

  render () {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        buttons: this.state.buttons[0]
      })
    );

    return (
      <div className={styles.container}>
        <Header />
          {childrenWithProps}
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
