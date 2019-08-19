import React from 'react';
import { shallow } from 'enzyme';
import MovieCard from './movieCard.jsx';

describe('<< MovieCard >>', () => {
  it('should render correctly', () => {
    const component = shallow(<MovieCard />);
  
    expect(component).toMatchSnapshot();
  });
});