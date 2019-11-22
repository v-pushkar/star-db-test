import React from 'react';
import { shallow } from 'enzyme';
import PlanetDetiles from './planet-detiles';

describe('<PlanetDetiles />', () => {
  test('renders', () => {
    const wrapper = shallow(<PlanetDetiles />);
    expect(wrapper).toMatchSnapshot();
  });
});
