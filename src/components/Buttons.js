/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Buttons(props) {
  return (
    <div className="btn-subgrid">
      <button type="button" onClick={() => props.clickHandler('AC')}>AC</button>
      <button type="button" onClick={() => props.clickHandler('+/-')}>+/-</button>
      <button type="button" onClick={() => props.clickHandler('%')}>%</button>
      <button type="button" className="orange" onClick={() => props.clickHandler('÷')}>÷</button>
      <button type="button" onClick={() => props.clickHandler('7')}>7</button>
      <button type="button" onClick={() => props.clickHandler('8')}>8</button>
      <button type="button" onClick={() => props.clickHandler('9')}>9</button>
      <button type="button" className="orange" onClick={() => props.clickHandler('x')}>x</button>
      <button type="button" onClick={() => props.clickHandler('4')}>4</button>
      <button type="button" onClick={() => props.clickHandler('5')}>5</button>
      <button type="button" onClick={() => props.clickHandler('6')}>6</button>
      <button type="button" className="orange" onClick={() => props.clickHandler('-')}>-</button>
      <button type="button" onClick={() => props.clickHandler('1')}>1</button>
      <button type="button" onClick={() => props.clickHandler('2')}>2</button>
      <button type="button" onClick={() => props.clickHandler('3')}>3</button>
      <button type="button" className="orange" onClick={() => props.clickHandler('+')}>+</button>
      <button type="button" className="span_two" onClick={() => props.clickHandler('0')}>0</button>
      <button type="button" onClick={() => props.clickHandler('.')}>.</button>
      <button type="button" className="orange" onClick={() => props.clickHandler('=')}>=</button>
    </div>
  );
}
