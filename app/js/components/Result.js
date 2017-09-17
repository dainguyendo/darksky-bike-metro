import React, { Component } from 'react';

import { getDarksky } from 'js/utils/lambda.utils';

import RaisedButton from 'material-ui/RaisedButton';

import store from 'js/redux/store';
import { saveData } from 'js/redux/actions/criteriaActions';

export default class Result extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id='result'>
        <RaisedButton label='Darksky!'
          onClick={ this.darksky } />
      </div>
    );
  }

  darksky = () => {
    const payload = {
      latitude: this.props.latitude,
      longitude: this.props.longitude
    };

    getDarksky(payload)
    .then(data => {
      const result = JSON.parse(data.Payload);
      store.dispatch(saveData(result));
    })
    .catch(err => {
      store.dispatch(saveData({ error: err.message }));
    });
  }
}
