import { combineReducers } from 'redux';
import covidDataReducer from './covidDataReducer';
export default combineReducers({
  covidData: covidDataReducer
});

