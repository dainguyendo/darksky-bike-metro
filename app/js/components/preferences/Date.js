import React, { Component } from 'react';

import moment from 'moment';
window.moment = moment;
import store from 'js/redux/store';
import { saveUnixTime } from 'js/redux/actions/criteriaActions';

import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';

export default class Preferences extends Component {
  constructor () {
    super();
    const today = new Date();
    this.state = {
      date: new Date(),
      time: new Date(today.getYear(), today.getMonth(), today.getDate(), 7)
    };

    this.updateDate();
  }

  render () {
    return (
      <div
        id='preference-commute-time'
        className='row-container' >
        <DatePicker
          className='calendar'
          value={ this.state.date }
          onChange={ this.handleDate }
          mode='landscape'
          minDate={ new Date() }
          maxDate={ new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000) }
          hintText='Date of commute' />
        <TimePicker
          className='calendar'
          value={ this.state.time }
          onChange={ this.handleTime }
          hintText='Time to depart' />
      </div>
    );
  }

  handleDate = (event, date) => {
    this.setState({ date });
    this.updateDate();
  }

  handleTime = (event, time) => {
    this.setState({ time });
    this.updateDate();
  }

  updateDate = () => {
    const momentTime = moment(this.state.time);
    const momentDate = moment(this.state.date);
    const renderedDateTime = moment({
     year: momentDate.year(),
     month: momentDate.month(),
     day: momentDate.date(),
     hour: momentTime.hours(),
     minute: momentTime.minutes()
   });
   const unix = renderedDateTime.unix();
   store.dispatch(saveUnixTime(unix));
  }
}
