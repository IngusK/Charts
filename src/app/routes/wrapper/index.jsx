import React from 'react';
import Header from './header.jsx';
import styles from './styles/styles.scss';

const Wrapper = ({ children }) => (
  <div>
    <div className="grid-wrapper">
      <Header />
      {children}
    </div>
  </div>
);

export default Wrapper;
