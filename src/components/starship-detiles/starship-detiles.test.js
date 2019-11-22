import React from 'react';
import { shallow } from 'enzyme';
import StarshipDetiles from './starship-detiles';

describe('<StarshipDetiles />', () => {
  test('renders', () => {
    const wrapper = shallow(<StarshipDetiles />);
    expect(wrapper).toMatchSnapshot();
  });
});
