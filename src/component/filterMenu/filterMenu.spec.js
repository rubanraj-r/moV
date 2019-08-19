import React from 'react';
import { shallow } from 'enzyme';
import FilterMenu from './filterMenu.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore();
describe('<< FilterMenu >>', () => {
  it('should render correctly', () => {
    const store = mockStore();
    const component = shallow(<Provider store={store}><FilterMenu /></Provider>);
  
    expect(component).toMatchSnapshot();
  });
});