import React, { Component } from 'react';

import { getDarksky } from 'js/utils/lambda.utils';
import { determine } from 'js/utils/determine.utils';

import RaisedButton from 'material-ui/RaisedButton';

import store from 'js/redux/store';
import { saveData, saveResult } from 'js/redux/actions/criteriaActions';

export default class Query extends Component {
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
      longitude: this.props.longitude,
      date: this.props.date
    };

    getDarksky(payload)
    .then(data => {
      const result = JSON.parse(data.Payload);
      store.dispatch(saveData(result));

      const dd = determine();
      store.dispatch(saveResult(dd));
    })
    .catch(err => {
      store.dispatch(saveData({ error: err.message }));
    });
  }
}
