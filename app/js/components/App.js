import React, { Component } from 'react';
import 'css/main.scss';

import Location from 'js/components/Location';
import Preferences from 'js/components/Preferences';
import Result from 'js/components/Result';
import Header from 'js/components/Header';
import Footer from 'js/components/Footer';

import { execute } from 'js/utils/utilities';

// Redux Store
import store from 'js/redux/store';

export default class App extends Component {
  state = store.getState();
  constructor () {
    super();
    this.state = { ...store.getState() };
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(this.storeDidUpdate);
    execute();
  }

  componentWillUnmount() { this.unsubscribe(); }

  storeDidUpdate = () => { this.setState({...store.getState()}); }

  render () {
    return (
      <div id='application'>
        <div id='preference-panel' className='panel'>
          <Header />
          <div className='flex-grow-2'>
            <Location />
            <Preferences {...this.state} />
          </div>
          <Footer />
        </div>
        <div id='result-panel' className='panel'>
          <Result result={ this.state.result } unixTime={ this.state.unixTime } />
        </div>
      </div>
    );
  }
}
