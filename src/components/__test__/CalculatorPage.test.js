import renderer from  'react-test-renderer';
import CalculatorPage from '../CalculatorPage';
​
it("Render the Calculator page user interaction", () => {
    const tree = renderer.create(<CalculatorPage />).toJSON();
    expect(tree).toMatchSnapshot();
})