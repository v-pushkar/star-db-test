import React from 'react';
import { shallow } from 'enzyme';
import ErrorBtn from './error-btn';

describe('<ErrorBtn />', () => {
  test('renders', () => {
    const wrapper = shallow(<ErrorBtn />);
    expect(wrapper).toMatchSnapshot();
  });
});
