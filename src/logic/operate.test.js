
import operate from './operate';

describe('Operate module', () => {
  test('Test operate sum n1: 6 plus n2: 4', () => {
    const cal = {
      next: '6',
      total: '4',
      operation: '+',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('10');
  });

  test('Test operate substraction n1: 6 - n2: 4', () => {
    const cal = {
      next: '6',
      total: '4',
      operation: '-',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('2');
  });

  test('Test operate divition n1: 6 / n2: 3', () => {
    const cal = {
      next: '6',
      total: '3',
      operation: '/',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('2');
  });

  test('Test operate multiplication n1: 6 * n2: 4', () => {
    const cal = {
      next: '6',
      total: '4',
      operation: '*',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('24');
  });

  test('Test calculator and operator module n1: 23 % n2: 5', () => {
    const cal = {
      next: '23',
      total: '5',
      operation: '%',
    };
    expect(operate(cal.next, cal.total, cal.operation)).toBe('3');
  });

});