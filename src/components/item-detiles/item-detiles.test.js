import React from 'react';
import { shallow } from 'enzyme';
import ItemDetiles from './item-detiles';

describe('<ItemDetiles />', () => {
  test('renders', () => {
    const wrapper = shallow(<ItemDetiles />);
    expect(wrapper).toMatchSnapshot();
  });
});
