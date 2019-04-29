import { ACTIONS } from '../../constants';
import { AUTHORIZATION, SERVICES } from '../../configs';
import fetch from '../../utils/fetch';

export function fetchDataOrderManagement() {
  return (dispatch) => {
    const options = {
      method: 'get',
      url: `${SERVICES.GET_ORDER_MANAGEMENT}?page=2&size=5`,
      headers: {
        Authorization: AUTHORIZATION
      }
    };
    dispatch(loadingAction());

    fetch(options)
      .then( response => {
        dispatch(dataFetched(response));
      })
      .catch(() => {
        dispatch(dataFetched({}));
      });
  };
}

function loadingAction() {
  return { type: ACTIONS.LOADING };
}

function dataFetched(data) {
  return {
    type: ACTIONS.LIST_OF_ORDER_MANAGEMENT_FETCHED,
    data: data
  };
}