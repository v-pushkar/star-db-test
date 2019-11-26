import React from 'react';
import { shallow } from 'enzyme';
import PlanetPage from './planet-page';

describe('<PlanetPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<PlanetPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
