import store from 'js/redux/store';
import { saveResult, saveData } from 'js/redux/actions/criteriaActions';

// Function to invoke Lambda function specifically to query Dark Sky API
const getDarksky = (payload) => {
  return new Promise((resolve, reject) => {
    const AWS = require('aws-sdk');

    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: 'us-east-1'
    });

    const lambda = new AWS.Lambda({ apiVersion: '2015-03-31', region: 'us-east-1' });

    const parameters = {
      FunctionName: 'getDarkSky',
      Payload: JSON.stringify(payload)
    };

    lambda.invoke(parameters, (err, data) => {
      if (err) { reject(err); }
      else {
        const object = JSON.parse(data.Payload);
        store.dispatch(saveData(object));
        resolve(object);
      }
    });
  });
};

const determine = (darksky, state) => {
  // Grab current weather information for requested date
  const { currently } = darksky;
  // Init result object to be dispatched
  const result = {
    method: '',
    whyIShouldMetro: [],
    summary: {
      'Summary': currently.summary,
      'Temperature': `${currently.temperature}F`,
      'Cloud Cover': `${currently.cloudCover * 100}%`,
      'UV Index': currently.uvIndex,
      'Humidity': currently.humidity,
      'Precipitation Probability': `${currently.precipProbability * 100}%`,
      'Precipitation Type': currently.precipType,
      'Wind Speed': `${currently.windSpeed} mph`,
      'Wind Gust': `${currently.windGust} mph`,
      'Visibility': `${currently.visibility} miles`
    }
  };

  // Check temperature being out of bounds
  if (currently.temperature < state.minTemperature || currently.temperature > state.maxTemperature) { result.whyIShouldMetro.push('temperature'); }
  // Check chance of rain
  if (currently.precipProbability > state.chanceOfRain) { result.whyIShouldMetro.push('rain'); }
  // If whyIShouldMetro arrary has contents - those are the reasons why the user should metro
  if (result.whyIShouldMetro.length !== 0) { result.method = 'metro'; }
  else { result.method = 'bike'; }
  store.dispatch(saveResult(result));
};

exports.execute = () => {
  const state = store.getState();
  const payload = {
    latitude: state.latitude,
    longitude: state.longitude,
    date: state.unixTime
  };
  getDarksky(payload)
  .then(data => {
    determine(data, state);
  })
  .catch((err) => {
    console.log('Execute ERROR', err);
    store.dispatch(saveResult(false));
  });
};

// Execute this only if their preferences aside from Date changes - no need to invoke lambda
exports.executeChangePreferences = () => {
  const state = store.getState();
  determine(state.data, state);
};

// Utility function to check if object is empty
exports.isEmpty = (object) => {
  for (const key in object) {
    if (object.hasOwnProperty(key)) { return false; }
  }
  return true;
};
