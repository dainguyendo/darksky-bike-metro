import React, { Component } from 'react';

import store from 'js/redux/store';
import { saveMinTemp, saveMaxTemp } from 'js/redux/actions/criteriaActions';

import TextField from 'material-ui/TextField';

export default class Temperature extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div
        id='preference-temperature'
        className='row-container' >
        <TextField
          defaultValue={ this.props.minTemperature }
          className='text-field'
          errorText=''
          onChange={ this.handleMinTemperature }
          floatingLabelText='Min. Temperature' />
        <TextField
          onChange={ this.handleMaxTemperature }
          defaultValue={ this.props.maxTemperature }
          className='text-field'
          floatingLabelText='Max Temperature' />
      </div>
    );
  }

  handleMaxTemperature = (event, maxTemperature) => {
    store.dispatch(saveMaxTemp(maxTemperature));
  }

  handleMinTemperature = (event, minTemperature) => {
    store.dispatch(saveMinTemp(minTemperature));
  }
}
