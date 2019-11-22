import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('<App />', () => {
  test('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
