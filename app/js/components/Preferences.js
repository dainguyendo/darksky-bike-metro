import React, { Component } from 'react';

import Temperature from 'js/components/preferences/Temperature';
import Rain from 'js/components/preferences/Rain';
import Date from 'js/components/preferences/Date';

import RaisedButton from 'material-ui/RaisedButton';

export default class Preferences extends Component {
  constructor () {
    super();
    this.state = { displayPreferences: false };
  }

  render () {
    const show = this.state.displayPreferences ? '' : 'hidden';
    return (
      <div id='preference' className='column-container' >
        <RaisedButton
          className='btn'
          label='Configure ride conditions'
          onClick={ this.togglePreferences } />
        <div className={`column-container ${show}`}>
          <Temperature minTemperature={ this.props.minTemperature } maxTemperature={ this.props.maxTemperature } />
          <Rain chanceOfRain={ this.props.chanceOfRain } />
          <Date />
        </div>
      </div>
    );
  }

  togglePreferences = () => { this.setState({ displayPreferences: !this.state.displayPreferences }); }
}
