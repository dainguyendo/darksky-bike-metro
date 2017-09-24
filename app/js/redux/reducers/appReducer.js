import {
  saveRain,
  saveLatitude,
  saveLongitude,
  saveMaxTemp,
  saveMinTemp,
  saveData,
  saveUnixTime,
  saveResult,
  toggleDrawer
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
  unixTime: saveUnixTime,
  result: saveResult,
  drawerVisible: toggleDrawer
});
