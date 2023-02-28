import React from 'react';
import styles from './styles/Quote.module.css';

const Quote = () => (
  <div className={styles.content}>
    <p className={styles.quote}>
      Mathematics is not about numbers, equations, computations, or algorithmic,
      it is about understanding. - William Paul Thurston
    </p>
  </div>
);

export default Quote;
