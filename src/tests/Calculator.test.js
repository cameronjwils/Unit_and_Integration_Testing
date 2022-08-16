import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let runningTotal;
  let equal;

  beforeEach(() => {
    container = render(<Calculator/>)
    button1 = container.getByTestId('number1');
    button2 = container.getByTestId('number2');
    button3 = container.getByTestId('number3');
    button4 = container.getByTestId('number4');
    button5 = container.getByTestId('number5');
    button6 = container.getByTestId('number6');
    button7 = container.getByTestId('number7');
    button8 = container.getByTestId('number8');
    button9 = container.getByTestId('number9');
    runningTotal = container.getByTestId('running-total');
    equal = container.getByTestId("operator-equals");
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add two numbers together', () => {
    const add = container.getByTestId("operator-add");
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('5');
  });

  it('should subtract two numbers', () => {
    const subtract = container.getByTestId("operator-subtract");
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should multiply two numbers together', () => {
    const multiply = container.getByTestId("operator-multiply");
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('15');
  });

  it('should divide two numbers', () => {
    const divide = container.getByTestId("operator-divide");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('can concatenate multiple number button clicks', () => {
  fireEvent.click(button5);
  fireEvent.click(button5);
  expect(runningTotal.textContent).toEqual('55');
  });

  it('should be able to chain multiple operations', () => {
    const add = container.getByTestId("operator-add");
    const subtract = container.getByTestId("operator-subtract");
    fireEvent.click(button4);
    fireEvent.click(add);
    fireEvent.click(button6);
    fireEvent.click(subtract);
    fireEvent.click(button7);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('can clear the running total without affecting the calculation', () => {
    const add = container.getByTestId("operator-add");
    const clear = container.getByTestId("clear");
    fireEvent.click(button2);
    fireEvent.click(add);
    fireEvent.click(button2);
    fireEvent.click(add);
    fireEvent.click(button2);
    fireEvent.click(add);
    fireEvent.click(button2);
    fireEvent.click(clear);
    fireEvent.click(button4);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('10');
  })

});

