import React, { Component } from 'react';

import store from 'js/redux/store';
import { saveRain } from 'js/redux/actions/criteriaActions';

import TextField from 'material-ui/TextField';

export default class Rain extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id='preference-rain'>
        <TextField
          onChange={ this.handleChanceOfRain }
          defaultValue={ this.props.chanceOfRain }
          className='text-field'
          floatingLabelText='Change of rain (%)' />
      </div>
    );
  }

  handleChanceOfRain = (event, percentage) => {
    store.dispatch(saveRain(percentage));
  }

}
