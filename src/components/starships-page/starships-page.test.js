import React from 'react';
import { shallow } from 'enzyme';
import StarshipsPage from './starships-page';

describe('<StarshipsPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<StarshipsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
