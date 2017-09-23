import store from 'js/redux/store';
import { getDarksky } from 'js/utils/lambda.utils';
import { saveResult } from 'js/redux/actions/criteriaActions';

exports.determine = () => {
  const state = store.getState();
  const { currently } = state.data;

  const result = {
    method: '',
    whyIShouldMetro: [],
    summary: { ...currently }
  };

  // Data returns temperature in celcius - convert our minTemp and maxTemp for ease
  const celsiusMinTemp = ((state.minTemperature - 32) * 5) / 9;
  const celsiusMaxTemp = ((state.maxTemperature - 32) * 5) / 9;

  // Check temperature being out of bounds
  if (currently.temperature < celsiusMinTemp || currently.temperature > celsiusMaxTemp) { result.whyIShouldMetro.push('temperature'); }

  // Check chance of rain
  if (currently.precipProbability > state.chanceOfRain) { result.whyIShouldMetro.push('rain'); }

  // If whyIShouldMetro arrary has contents - those are the reasons why the user should metro
  if (result.whyIShouldMetro.length !== 0) {
    result.method = 'metro';
    return result;
  } else {
    result.method = 'bike';
    return result;
  }
};


exports.runQuery = () => {
  const state = store.getState();

  const payload = {
    latitude: state.latitude,
    longitude: state.longitude,
    date: state.date
  };

  getDarksky(payload).then(data => {
    const json = JSON.parse(data.Payload);
    const { currently } = json;

    const result = {
      method: '',
      whyIShouldMetro: [],
      summary: { ...currently }
    };

    // Data returns temperature in celcius - convert our minTemp and maxTemp for ease
    const celsiusMinTemp = ((state.minTemperature - 32) * 5) / 9;
    const celsiusMaxTemp = ((state.maxTemperature - 32) * 5) / 9;
    // Check temperature being out of bounds
    if (currently.temperature < celsiusMinTemp || currently.temperature > celsiusMaxTemp) { result.whyIShouldMetro.push('temperature'); }
    // Check chance of rain
    if (currently.precipProbability > state.chanceOfRain) { result.whyIShouldMetro.push('rain'); }
    // If whyIShouldMetro arrary has contents - those are the reasons why the user should metro
    if (result.whyIShouldMetro.length !== 0) { result.method = 'metro'; }
    else { result.method = 'bike'; }
    store.dispatch(saveResult(result));
  })
  .catch(() => {
    store.dispatch(saveResult(false));
  });
};
