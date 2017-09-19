import {
  saveRain,
  saveLatitude,
  saveLongitude,
  saveMaxTemp,
  saveMinTemp,
  saveData,
  saveDate
} from 'js/redux/reducers/criteriaReducers';

import { combineReducers } from 'redux';

// State Model
export default combineReducers({
  chanceOfRain: saveRain,
  latitude: saveLatitude,
  longitude: saveLongitude,
  minTemperature: saveMinTemp,
  maxTemperature: saveMaxTemp,
  data: saveData,
  date: saveDate
});
