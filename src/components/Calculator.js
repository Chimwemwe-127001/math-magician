import React from 'react';
import '../index.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (event) => {
    this.setState((initialState) => calculate(initialState, event));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output">
          <div className="operand">
            <p>
              { total }
              { operation }
              { next }
            </p>
          </div>
        </div>
        <button type="button" onClick={() => this.clickHandler('AC')}>AC</button>
        <button type="button" onClick={() => this.clickHandler('+/-')}>+/-</button>
        <button type="button" onClick={() => this.clickHandler('%')}>%</button>
        <button type="button" className="orange" onClick={() => this.clickHandler('÷')}>÷</button>
        <button type="button" onClick={() => this.clickHandler('7')}>7</button>
        <button type="button" onClick={() => this.clickHandler('8')}>8</button>
        <button type="button" onClick={() => this.clickHandler('9')}>9</button>
        <button type="button" className="orange" onClick={() => this.clickHandler('x')}>x</button>
        <button type="button" onClick={() => this.clickHandler('4')}>4</button>
        <button type="button" onClick={() => this.clickHandler('5')}>5</button>
        <button type="button" onClick={() => this.clickHandler('6')}>6</button>
        <button type="button" className="orange" onClick={() => this.clickHandler('-')}>-</button>
        <button type="button" onClick={() => this.clickHandler('1')}>1</button>
        <button type="button" onClick={() => this.clickHandler('2')}>2</button>
        <button type="button" onClick={() => this.clickHandler('3')}>3</button>
        <button type="button" className="orange" onClick={() => this.clickHandler('+')}>+</button>
        <button type="button" className="span_two" onClick={() => this.clickHandler('0')}>0</button>
        <button type="button" onClick={() => this.clickHandler('.')}>.</button>
        <button type="button" className="orange" onClick={() => this.clickHandler('=')}>=</button>
      </div>
    );
  }
}
