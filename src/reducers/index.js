import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import sekolah from '../pages/Sekolah/reducer';
import listOrderManagement from '../pages/ListOrderManagement/reducer';
import login from '../pages/Login/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  sekolah,
  listOrderManagement,
  login,
  routing: routerReducer
});

export default rootReducer;
