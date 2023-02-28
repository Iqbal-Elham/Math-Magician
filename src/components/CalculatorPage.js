import React from 'react';
import Calculator from './Calculator.js';
import styles from './styles/CalculatorPage.module.css';

const CalculatorPage = () => (
  <div className={styles.content}>
    <h2>Let&apos;s Do Some Math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
