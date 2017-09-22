import React, { Component } from 'react';

import store from 'js/redux/store';
import { saveMinTemp, saveMaxTemp } from 'js/redux/actions/criteriaActions';

import TextField from 'material-ui/TextField';

export default class Temperature extends Component {
  constructor () {
    super();
    this.state = {
      errorMinTemp: '',
      errorMaxTemp: ''
    };
  }

  render () {
    return (
      <div
        id='preference-temperature'
        className='row-container' >
        <TextField
          defaultValue={ this.props.minTemperature }
          className='text-field'
          errorText={ this.state.errorMinTemp }
          onChange={ this.handleMinTemperature }
          floatingLabelText='Min. Temperature' />
        <TextField
          errorText={ this.state.errorMaxTemp }
          onChange={ this.handleMaxTemperature }
          defaultValue={ this.props.maxTemperature }
          className='text-field'
          floatingLabelText='Max Temperature' />
      </div>
    );
  }

  handleMaxTemperature = (event, maxTemperature) => {
    const temperature = parseFloat(maxTemperature);
    if (isNaN(temperature)) { this.setState({ errorMaxTemp: 'Not a number.'}); }
    else {
      this.setState({ errorMaxTemp: ''});
      store.dispatch(saveMaxTemp(temperature));
    }
  }

  handleMinTemperature = (event, minTemperature) => {
    const temperature = parseFloat(minTemperature);
    if (isNaN(temperature)) { this.setState({ errorMinTemp: 'Not a number.'}); }
    else {
      this.setState({ errorMinTemp: ''});
      store.dispatch(saveMinTemp(temperature));
    }
  }
}
