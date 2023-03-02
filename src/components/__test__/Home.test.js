import renderer from 'react-test-renderer';
import Home from '../Home';

it('Snapshot of the home page', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
