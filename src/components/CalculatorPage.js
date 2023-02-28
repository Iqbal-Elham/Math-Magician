/* eslint-disable import/extensions */
import React from 'react';
import styles from './styles/CalculatorPage.module.css';
import Calculator from './calculator';

const CalculatorPage = () => (
  <div className={styles.content}>
    <h2>Let&apos;s Do Some Math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
