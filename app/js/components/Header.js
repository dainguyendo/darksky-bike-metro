import React, { Component } from 'react';
import * as Colors from 'material-ui/styles/colors';

import Train from 'material-ui/svg-icons/maps/train';
import Bike from 'material-ui/svg-icons/maps/directions-bike';

const titleContainerStyle = {
  color: Colors.red500
};

const iconStyle = {
  width: '100px',
  height: '100px'
};

export default class Header extends Component {
  render () {
    return (
      <div id='header'>
        <div className='title' style={ titleContainerStyle }>
          <Bike style={ iconStyle } />
          <span>||</span>
          <Train style={ iconStyle } />
        </div>
      </div>
    );
  }
}
