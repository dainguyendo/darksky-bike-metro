import {
  SAVE_RAIN,
  SAVE_LATITUDE,
  SAVE_LONGITUDE,
  SAVE_TIME,
  SAVE_UNIXTIME,
  SAVE_MINTEMP,
  SAVE_MAXTEMP,
  SAVE_DATA,
  SAVE_RESULT,
  TOGGLE_DRAWER
} from 'js/redux/constants/criteriaConstants';

export function saveRain (payload) {
  return { type: SAVE_RAIN, payload };
}

export function saveLatitude (payload) {
  return { type: SAVE_LATITUDE, payload };
}

export function saveLongitude (payload) {
  return { type: SAVE_LONGITUDE, payload };
}

export function saveTime (payload) {
  return { type: SAVE_TIME, payload };
}

export function saveMinTemp (payload) {
  return { type: SAVE_MINTEMP, payload };
}

export function saveMaxTemp (payload) {
  return { type: SAVE_MAXTEMP, payload };
}

export function saveData (payload) {
  return { type: SAVE_DATA, payload };
}

export function saveUnixTime(payload) {
  return { type: SAVE_UNIXTIME, payload };
}

export function saveResult(payload) {
  return { type: SAVE_RESULT, payload };
}

export function toggleDrawer (payload) {
  return { type: TOGGLE_DRAWER, payload };
}
