import React, { Component } from 'react';
import 'css/main.scss';

import Location from 'js/components/Location';
import Preferences from 'js/components/Preferences';
import Query from 'js/components/Query';
import Result from 'js/components/Result';

// Redux Store
import store from 'js/redux/store';

export default class App extends Component {
  state = store.getState();
  constructor () {
    super();
    this.state = { ...store.getState() };
  }

  componentDidMount () { this.unsubscribe = store.subscribe(this.storeDidUpdate); }

  componentWillUnmount() { this.unsubscribe(); }

  storeDidUpdate = () => { this.setState({...store.getState()}); }

  render () {
    return (
      <div id='application'>
        <Location />
        <Preferences {...this.state} />
        <Query
          date={ this.state.unixTime }
          latitude={ this.state.latitude }
          longitude={ this.state.longitude } />
        <Result result={ this.state.result } />
      </div>
    );
  }
}
