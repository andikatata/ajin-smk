import { ACTIONS } from '../../constants';
import { setToken, setExpireTime } from '../../utils/common';
import fetch from '../../utils/fetch';
import { SERVICES } from '../../configs';

export function fetchLogin() {
  return dispatch => {
    const options = {
      method: 'POST',
      url: SERVICES.LOGIN,
    };

    dispatch(loadingAction());

    fetch(options)
      .then(res => {
        dispatch(doneLoadingAction());

        if (res.access_token) {
          setToken(res.access_token);
          setExpireTime(res.expires_in);
          location.href = '/';
        } else {
          dispatch(loginFailedAction('You are not allowed to access'));
        }
      })
      .catch(err => {
        dispatch(loginFailedAction(err.error_description));
        dispatch(doneLoadingAction());
      });
  };
}

function loadingAction() {
  return { type: ACTIONS.LOADING };
}

function doneLoadingAction() {
  return { type: ACTIONS.DONE_LOADING };
}

function loginFailedAction(message) {
  return {
    type: ACTIONS.LOGIN_FAILED,
    message,
  };
}
