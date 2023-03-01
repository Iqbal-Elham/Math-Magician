import renderer from  'react-test-renderer';
import Quote from '../Quote';

it("Render the Quote user interaction", () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
})