import {
  SAVE_RAIN,
  SAVE_LATITUDE,
  SAVE_LONGITUDE,
  SAVE_MINTEMP,
  SAVE_MAXTEMP,
  SAVE_DATA,
  SAVE_DATE
} from 'js/redux/constants/criteriaConstants';

import initialState from 'js/redux/initialState';

export function saveRain (rain = initialState.chanceOfRain, action) {
  return action.type !== SAVE_RAIN ? rain : action.payload;
}

export function saveLatitude (latitude = initialState.latitude, action) {
  return action.type !== SAVE_LATITUDE ? latitude : action.payload;
}

export function saveLongitude (longitude = initialState.longitude, action) {
  return action.type !== SAVE_LONGITUDE ? longitude : action.payload;
}

export function saveMaxTemp (temperature = initialState.maxTemperature, action) {
  return action.type !== SAVE_MAXTEMP ? temperature : action.payload;
}

export function saveMinTemp (temperature = initialState.minTemperature, action) {
  return action.type !== SAVE_MINTEMP ? temperature : action.payload;
}

export function saveData (data = initialState.data, action) {
  return action.type !== SAVE_DATA ? data : action.payload;
}

export function saveDate (date = new Date(), action) {
  return action.type !== SAVE_DATE ? date : action.payload;
}
