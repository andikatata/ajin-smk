import { ACTIONS } from '../../constants';

const initialState = {
  message: ''
};

export default function reducer(state = initialState, action) {
  const { LOGIN_FAILED } = ACTIONS;
  const { type, message } = action;

  switch (type) {
    case LOGIN_FAILED:
      return {
        ...state,
        message
      };
    default:
      return state;
  }
}
