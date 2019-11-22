import React from 'react';
import { shallow } from 'enzyme';
import PersonDetiles from './person-detiles';

describe('<PersonDetiles />', () => {
  test('renders', () => {
    const wrapper = shallow(<PersonDetiles />);
    expect(wrapper).toMatchSnapshot();
  });
});
