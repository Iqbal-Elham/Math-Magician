import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calculation = (e) => {
    const value = e.target.innerText;
    const calc = calculate(state, value);
    setState(calc);
  };

  const result = (state) => {
    if (state.next !== null && state.next !== undefined) return state.next;
    if (state.total !== null && state.total !== undefined) return state.total;
    return 0;
  };

  return (
    <div className="calc-container">
      <div className="result-screen">{ result(state) }</div>
      <div className="buttons">
        <button type="button" onClick={calculation} className="gray-btn">AC</button>
        <button type="button" onClick={calculation} className="gray-btn">+/-</button>
        <button type="button" onClick={calculation} className="gray-btn">%</button>
        <button type="button" onClick={calculation} className="orange-btn">/</button>
        <button type="button" onClick={calculation} className="gray-btn">7</button>
        <button type="button" onClick={calculation} className="gray-btn">8</button>
        <button type="button" onClick={calculation} className="gray-btn">9</button>
        <button type="button" onClick={calculation} className="orange-btn">*</button>
        <button type="button" onClick={calculation} className="gray-btn">4</button>
        <button type="button" onClick={calculation} className="gray-btn">5</button>
        <button type="button" onClick={calculation} className="gray-btn">6</button>
        <button type="button" onClick={calculation} className="orange-btn">-</button>
        <button type="button" onClick={calculation} className="gray-btn">1</button>
        <button type="button" onClick={calculation} className="gray-btn">2</button>
        <button type="button" onClick={calculation} className="gray-btn">3</button>
        <button type="button" onClick={calculation} className="orange-btn">+</button>
        <button type="button" onClick={calculation} className="zero-btn">0</button>
        <button type="button" onClick={calculation} className="gray-btn">.</button>
        <button type="button" onClick={calculation} className="orange-btn">=</button>
      </div>
    </div>
  );
};

export default Calculator;
