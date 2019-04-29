import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from '../index';

jest.mock('../component');
jest.mock('../styles');
jest.mock('../validate');

describe('Login', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      form: {}
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Login store={store} />);

    expect(wrapper.props()).toHaveProperty('form', 'login');
    expect(wrapper.props()).toHaveProperty('validate');
  });
});