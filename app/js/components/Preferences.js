import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';

export default class Preferences extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id='preference'>
        <div id='preference-temperature'>
          <span>Temperature Bounds</span>
          <TextField />
          <TextField />
        </div>
        <div id='preference-rain'>
          <span>Maximum Chance of Rain</span>
          <TextField />
        </div>
        <div id='preference-commute-time'>
          <span>Commute Window</span>
          <span>Date</span>
          <DatePicker />
          <span>Time</span>
          <TimePicker />
        </div>
      </div>
    );
  }
}
