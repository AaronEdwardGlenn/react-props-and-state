import React, { Component } from 'react';
import styles from '../App.css';

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className={styles.Footer}>
          <section className={styles.stats}>
            <p>MAD LIBS FOR YO FACE</p>
          </section>
          <section className={styles.acknowledgment}>
            <p>❮❯ by <a href="#">Your Mom</a> 20420</p>
          </section>
        </footer>
      </>
    );
  }
}
