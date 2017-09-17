import React, { Component } from 'react';
import 'css/main.scss';

import Location from 'js/components/Location';
import Preferences from 'js/components/Preferences';
import Result from 'js/components/Result';

// Redux Store
import store from 'js/redux/store';

export default class App extends Component {
  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(this.storeDidUpdate);
  }

  render () {
    return (
      <div>
        <Location />
        <Preferences />
        <Result
          latitude={ this.state.latitude }
          longitude={ this.state.longitude } />
      </div>
    );
  }

  storeDidUpdate = () => {
    this.setState = store.getState();
  }
}
