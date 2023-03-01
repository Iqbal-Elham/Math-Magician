import renderer from 'react-test-renderer';
import Home from '../Home';

it('Render the home user interaction', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
