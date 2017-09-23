import React, { Component } from 'react';

import ResultCard from 'js/components/resultparts/ResultCard';
import Weather from 'js/components/resultparts/Weather';

import { isEmpty } from 'js/utils/utilities';

export default class Result extends Component {
  render () {
    const { result } = this.props;
    const resultClassName = isEmpty(result) ? 'hidden' : '';
    return (
      <div className={ resultClassName }>
        <ResultCard result={ this.props.result } />
        <Weather result={ this.props.result } />
      </div>
    );
  }
}
