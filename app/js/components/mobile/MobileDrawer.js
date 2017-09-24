import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';

import Header from 'js/components/Header';
import Footer from 'js/components/Footer';
import Location from 'js/components/Location';
import Preferences from 'js/components/Preferences';

import store from 'js/redux/store';
import { toggleDrawer } from 'js/redux/actions/criteriaActions';

export default class MobileDrawer extends Component {
  render() {
    return (
      <div id='mobile-drawer'>
        <Drawer
          docked={false}
          width={'75%'}
          open={ this.props.drawerVisible }
          onRequestChange={ this.handleRequestChange } >
          <div id='preference-panel-mobile' className='panel'>
            <Header />
            <div className='flex-grow-2'>
              <Location />
              <Preferences {...this.props} />
            </div>
            <Footer />
          </div>
        </Drawer>
      </div>
    );
  }

  handleRequestChange = () => {
    store.dispatch(toggleDrawer(false));
  }
}
