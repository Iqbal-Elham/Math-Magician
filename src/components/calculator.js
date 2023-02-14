import React from 'react';
import './calculator.css';

const Calculator = () => (
  <div className="calc-container">
    <div className="result-screen">0</div>
    <div className="buttons">
      <button type="button" className="gray-btn">AC</button>
      <button type="button" className="gray-btn">+/-</button>
      <button type="button" className="gray-btn">%</button>
      <button type="button" className="orange-btn">+</button>
      <button type="button" className="gray-btn">7</button>
      <button type="button" className="gray-btn">8</button>
      <button type="button" className="gray-btn">9</button>
      <button type="button" className="orange-btn">*</button>
      <button type="button" className="gray-btn">4</button>
      <button type="button" className="gray-btn">5</button>
      <button type="button" className="gray-btn">6</button>
      <button type="button" className="orange-btn">-</button>
      <button type="button" className="gray-btn">1</button>
      <button type="button" className="gray-btn">2</button>
      <button type="button" className="gray-btn">3</button>
      <button type="button" className="orange-btn">+</button>
      <button type="button" className="zero-btn">0</button>
      <button type="button" className="gray-btn">.</button>
      <button type="button" className="orange-btn">=</button>
    </div>
  </div>
);

export default Calculator;
