import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles/styles-header.scss';

export default class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <nav>
          <ul className="nav-large">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to ="/">About</NavLink></li>
            <li><NavLink to="/">FAQ</NavLink></li>
            <li><NavLink to="/">Contacts</NavLink></li>
          </ul>
        </nav>
      </header>
    );
  }
};
