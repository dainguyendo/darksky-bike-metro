import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Help from 'material-ui/svg-icons/action/help';

export default class Welcome extends Component {
  constructor () {
    super();
    this.state = { open: false };
  }
  render () {
    const actions = [
      <FlatButton
        label='Close'
        primary={ true }
        onClick={this.handleClose} />,
    ];

    return (
      <div>
        <FlatButton
          icon={ <Help /> }
          className='btn'
          label='Getting started'
          onClick={ this.handleOpen } />
        <Dialog
          className='subtitle'
          title='Welcome'
          actions={ actions }
          modal={false}
          open={ this.state.open }
          onRequestClose={ this.handleClose } >
          <div className='paragraph'>
            Commuting choices are tough sometimes, especially when weather comes into play. Use this application to help make your choice easier! Simply search your commute address and see if you should bike or take the train. A little picky? Use 'Configure Ride Conditions' to set the specifics!
          </div>
        </Dialog>
      </div>
    );
  }

  handleOpen = () => { this.setState({ open: true }); };

  handleClose = () => { this.setState({ open: false }); };
}
