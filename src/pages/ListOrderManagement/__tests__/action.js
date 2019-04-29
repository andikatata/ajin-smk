import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../action';
import { ACTIONS } from '../../../constants';

jest.mock('react-router-dom');
jest.useFakeTimers();

describe('Home actions', () => {
  const mockStore = configureMockStore([thunk]);
  const initialState = {
    isLoading: false,
    data: {}
  };

  it('dispatches action LIST_OF_ORDER_MANAGEMENT_FETCHED', () => {
    const store = mockStore(initialState);
    const assert = [
      {
        type: ACTIONS.LOADING
      }
    ];
    store.dispatch(actions.fetchDataOrderManagement());
    jest.runAllTimers();
    expect(store.getActions()).toEqual(assert);
  });
});