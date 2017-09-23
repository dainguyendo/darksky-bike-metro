import React, { Component } from 'react';
import Welcome from 'js/components/Welcome';
import FlatButton from 'material-ui/FlatButton';

import Code from 'material-ui/svg-icons/action/code';
import Sun from 'material-ui/svg-icons/image/wb-sunny';


export default class Footer extends Component {
  render () {
    return (
      <div className='column-container'>
        <Welcome />
        <FlatButton
          className='btn'
          label='darksky-bike-metro'
          icon={ <Code /> }
          target='_blank'
          href='https://github.com/dainguyendo/darksky-bike-metro'/>
        <FlatButton
          className='btn'
          label='Powered by Dark Sky'
          icon={ <Sun /> }
          target='_blank'
          href='https://darksky.net/poweredby/'/>
      </div>
    );
  }
}
