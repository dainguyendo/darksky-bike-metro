import {
  SAVE_RAIN,
  SAVE_LATITUDE,
  SAVE_LONGITUDE,
  SAVE_DATE,
  SAVE_TIME,
  SAVE_MINTEMP,
  SAVE_MAXTEMP,
  SAVE_DATA,
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

export function saveDate (payload) {
  return { type: SAVE_DATE, payload };
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
