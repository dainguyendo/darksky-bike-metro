import React, { Component } from 'react';

import store from 'js/redux/store';
import { saveMinTemp, saveMaxTemp } from 'js/redux/actions/criteriaActions';
import { executeChangePreferences } from 'js/utils/utilities';

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
        className='column-container' >
        <TextField
          defaultValue={ this.props.minTemperature }
          className='text-field'
          errorText={ this.state.errorMinTemp }
          onChange={ this.handleMinTemperature }
          floatingLabelText='Minimum Temperature (fahrenheit)' />
        <TextField
          errorText={ this.state.errorMaxTemp }
          onChange={ this.handleMaxTemperature }
          defaultValue={ this.props.maxTemperature }
          className='text-field'
          floatingLabelText='Max Temperature (fahrenheit)' />
      </div>
    );
  }

  handleMaxTemperature = (event, maxTemperature) => {
    const temperature = parseFloat(maxTemperature);
    if (isNaN(temperature)) { this.setState({ errorMaxTemp: 'Not a number.'}); }
    else {
      this.setState({ errorMaxTemp: ''});
      store.dispatch(saveMaxTemp(temperature));
      executeChangePreferences();
    }
  }

  handleMinTemperature = (event, minTemperature) => {
    const temperature = parseFloat(minTemperature);
    if (isNaN(temperature)) { this.setState({ errorMinTemp: 'Not a number.'}); }
    else {
      this.setState({ errorMinTemp: ''});
      store.dispatch(saveMinTemp(temperature));
      executeChangePreferences();
    }
  }
}
