import { combineReducers } from 'redux';
import BarsReducer from './reducer_weather';
import {reducer} from 'redux-form';
import authReducer from './auth_reducer';
const rootReducer = combineReducers({
  form:reducer,
  bars: BarsReducer,
  auth: authReducer
  

});

export default rootReducer;
