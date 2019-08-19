import React from 'react';
import { shallow } from 'enzyme';
import Movies from './movies.jsx';
import movies from './../../../__mocks__/movies.js';

describe('<< Movies >>', () => {
  it('should render correctly', () => {
    const component = shallow(<Movies movies={movies} />);
  
    expect(component).toMatchSnapshot();
  });
});