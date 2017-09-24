import React from 'react';
import { shallow } from 'enzyme';

const testState = {
  'chanceOfRain': 50,
  'latitude': 38.8935755,
  'longitude': -77.0846155,
  'minTemperature': 32,
  'maxTemperature': 100,
  'data': {},
  'unixTime': 1506250800,
  'result': {},
  'drawerVisible': false
};

// React Components
import Header from '../app/js/components/Header';
import Location from '../app/js/components/Location';
import Preferences from '../app/js/components/Preferences';
import Weather from '../app/js/components/Weather';
import Welcome from '../app/js/components/Welcome';

test('Header matches snapshot', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});

test('Location matches snapshot', () => {
  const component = shallow(<Location />);
  expect(component).toMatchSnapshot();
});

test('Preferences matches snapshot', () => {
  const component = shallow(<Preferences {...testState} />);
  expect(component).toMatchSnapshot();
});

test('Weather matches snapshot', () => {
  const component = shallow(<Weather result={testState.result} />);
  expect(component).toMatchSnapshot();
});

test('Welcome matches snapshot', () => {
  const component = shallow(<Welcome />);
  expect(component).toMatchSnapshot();
});
