import React, { Component } from 'react';
import 'css/main.scss';

import Location from 'js/components/Location';
import Preferences from 'js/components/Preferences';
import Result from 'js/components/Result';
import Header from 'js/components/Header';
import Footer from 'js/components/Footer';

import MobileDrawer from 'js/components/mobile/MobileDrawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import More from 'material-ui/svg-icons/action/view-headline';

import { execute } from 'js/utils/utilities';

// Redux Store
import store from 'js/redux/store';
import { toggleDrawer } from 'js/redux/actions/criteriaActions';

const fabStyle = {
  position: 'absolute',
  right: '15px',
  bottom: '15px'
};

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
        <MobileDrawer {...this.state } />
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
        <FloatingActionButton
          className='fab-drawer-controller'
          onClick={ this.handleToggle}
          style={ fabStyle }
          handleRequestChange={ this.handleClose }>
          <More />
        </FloatingActionButton>
      </div>
    );
  }

  handleToggle = () => { store.dispatch(toggleDrawer(!this.state.drawerVisible)); }
  handleClose = () => { store.dispatch(toggleDrawer(false)); };
}
