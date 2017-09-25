import React, { Component } from 'react';

import moment from 'moment';

import store from 'js/redux/store';
import { saveUnixTime } from 'js/redux/actions/criteriaActions';
import { execute } from 'js/utils/utilities';

import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';

export default class Calendar extends Component {
  constructor () {
    super();
    const today = new Date();
    this.state = {
      date: new Date(),
      time: new Date(today.getYear(), today.getMonth(), today.getDate(), 7)
    };
    this.updateDate();
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextState === this.state) { return false; }
    else { return true; }
  }

  componentDidUpdate () {
    this.updateDate();
    execute();
  }

  render () {
    return (
      <div
        id='preference-commute-time'
        className='column-container' >
        <DatePicker
          value={ this.state.date }
          onChange={ this.handleDate }
          hintText='Date of commute'
          formatDate={ this.formatDate }
          mode='landscape'
          minDate={ new Date() }
          maxDate={ new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000) }
           />
        <TimePicker
          value={ this.state.time }
          onChange={ this.handleTime }
          hintText='Time to depart' />
      </div>
    );
  }

  formatDate = (date) => {
    const newDate = moment(date);
    return newDate.format('dddd, MMMM Do YYYY');
  }

  handleDate = (event, date) => { this.setState({ date }); }

  handleTime = (event, time) => { this.setState({ time }); }

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
