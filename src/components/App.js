import React, { PropTypes } from 'react';

import Header from './Header';
//import List from './List';
import Footer from './Footer';

import styles from './app.css';


class App extends React.Component {
  render () {
    return (
      <div className={styles.container}>
        <Header />
          {this.props.children}
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
