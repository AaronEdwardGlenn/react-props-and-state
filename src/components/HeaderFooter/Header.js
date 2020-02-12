import React, { Component } from 'react';
import styles from '../App.css';

export default class Header extends Component {
  render() {
    return (
      <>
        <header className={styles.Header}>
          <nav>
            <ul>
              <li><a className={styles.active} href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </nav>
          <section>
            <h1>The MAD LIB MAD LIBS FOR YOUR MAD LIBS MADDDDDD</h1>
            <h2>Make a mad lib! Need to learn the rules? Fuck you!</h2>
          </section>
        </header>
      </>
    );
  }
}
