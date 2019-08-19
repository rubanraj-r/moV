import React from 'react';
import { shallow } from 'enzyme';
import Header from './header.jsx';

describe('<< Header >>', () => {
  it('should render correctly', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});