import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../CalculatorPage';

describe("Calculator Page", () => {

  it('Should', () => {
    render(<CalculatorPage />);
    const h2 = screen.getByTestId('h2Id')
    expect(h2.innerHTML).toBe("Let's Do Some Math!")
  })

  it('Render the Calculator page user interaction', () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
