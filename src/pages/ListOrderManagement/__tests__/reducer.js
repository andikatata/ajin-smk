import reducer from '../reducer';
import { ACTIONS } from '../../../constants';

describe('Home reducer', () => {
  it('returns desired state when given LOADING action', () => {
    const action = { type: ACTIONS.LOADING };
    expect(reducer(undefined, action)).toHaveProperty('isLoading', true);
  });
  it('returns desired state when given LIST_OF_ORDER_MANAGEMENT_FETCHED action', () => {
    const action = {
      type: ACTIONS.LIST_OF_ORDER_MANAGEMENT_FETCHED,
      data: {}
    };
    const assert = {
      isLoading: false,
      data: {}
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });
  it('returns initial state when given other actions', () => {
    const action = { type: 'x' };
    const assert = {
      isLoading: false,
      data: {}
    };
    expect(reducer(undefined, action)).toMatchObject(assert);
  });
});