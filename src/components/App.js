import React from 'react';

import Header from './Header';
import List from './List';
import Footer from './Footer';

import styles from './app.css';


const App = () => (
  <div className={styles.container}>
    <Header />
    <List />
    <Footer />
  </div>
);

export default App;
