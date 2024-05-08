import React, { useState } from 'react';
 import './App.css'

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [currentOperand, setCurrentOperand] = useState('');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumberClick = (num) => {
    if (display === '0' && num === '0') return;

    if (display === '0' || operation !== '') {
      setDisplay(num);
      setCurrentOperand(num);
    } else {
      setDisplay(display + num);
      setCurrentOperand(currentOperand + num);
    }
  };

  const handleOperationClick = (op) => {
    if (operation !== '' && currentOperand !== '') {
      calculate();
    }
    setOperation(op);
    setPreviousOperand(display);
    setCurrentOperand('');
  };

  const calculate = () => {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setPreviousOperand('');
    setCurrentOperand(result.toString());
    setOperation('');
  };

  const handleEqualsClick = () => {
    calculate();
  };

  const handleClearClick = () => {
    setDisplay('0');
    setPreviousOperand('');
    setCurrentOperand('');
    setOperation('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="btn" onClick={() => handleNumberClick('7')}>7</button>
          <button className="btn" onClick={() => handleNumberClick('8')}>8</button>
          <button className="btn" onClick={() => handleNumberClick('9')}>9</button>
          <button className="btn" onClick={() => handleOperationClick('/')}>/</button>

          <button className="btn" onClick={() => handleNumberClick('4')}>4</button>
          <button className="btn" onClick={() => handleNumberClick('5')}>5</button>
          <button className="btn" onClick={() => handleNumberClick('6')}>6</button>
          <button className="btn" onClick={() => handleOperationClick('*')}>*</button>

          <button className="btn" onClick={() => handleNumberClick('1')}>1</button>
          <button className="btn" onClick={() => handleNumberClick('2')}>2</button>
          <button className="btn" onClick={() => handleNumberClick('3')}>3</button>
          <button className="btn" onClick={() => handleOperationClick('-')}>-</button>

          <button className="btn" onClick={() => handleNumberClick('0')}>0</button>
          <button className="btn" onClick={() => handleNumberClick('.')}>.</button>
          <button className="btn" onClick={handleEqualsClick}>=</button>
          <button className="btn" onClick={() => handleOperationClick('+')}>+</button>
        </div>
        <button className="btn clear" onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
