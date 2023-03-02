import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../calculator';

describe('Calculator', () => {
  it('should return the length of the buttons', () => {
    render(<Calculator />);

    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(19);
  });

  it('Render the user interaction', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
