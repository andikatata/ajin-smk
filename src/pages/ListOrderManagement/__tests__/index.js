import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ListOrderManagement from '../index';

jest.mock('../action');
jest.mock('../component');
jest.mock('../styles');

describe('ListOrderManagement', () => {
  it('has connected redux props', () => {
    const mockStore = configureMockStore([thunk]);
    const initialState = {
      listOrderManagement: {},
      loading: {},
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<ListOrderManagement store={store} />);

    expect(wrapper.props()).toHaveProperty('isLoading');
    expect(wrapper.props()).toHaveProperty('data');
  });
});