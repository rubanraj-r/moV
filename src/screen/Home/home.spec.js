import React from 'react';
import { shallow } from 'enzyme';
import Home from './home.jsx';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

const mockStore = configureStore();
describe('<< Home >>', () => {
  it('should render correctly', () => {
    const store = mockStore();
    const component = shallow(<Provider store={store}><Home /></Provider>);
  
    expect(component).toMatchSnapshot();
  });
});