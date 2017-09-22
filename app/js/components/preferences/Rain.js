import React, { Component } from 'react';

import store from 'js/redux/store';
import { saveRain } from 'js/redux/actions/criteriaActions';

import TextField from 'material-ui/TextField';

export default class Rain extends Component {
  constructor () {
    super();
    this.state = {
      errorRainChance: ''
    };
  }

  render () {
    return (
      <div id='preference-rain'>
        <TextField
          errorText={ this.state.errorRainChance }
          onChange={ this.handleChanceOfRain }
          defaultValue={ this.props.chanceOfRain }
          className='text-field'
          floatingLabelText='Change of rain (%)' />
      </div>
    );
  }

  handleChanceOfRain = (event, percentage) => {
    const rain = parseFloat(percentage);
    if (isNaN(rain) || (rain < 0 || rain > 100)) { this.setState({ errorRainChance: 'Not a valid percentage.'}); }
    else {
      this.setState({ errorRainChance: ''});
      store.dispatch(saveRain(rain));
    }
  }

}
