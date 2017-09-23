import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import store from 'js/redux/store';
import { saveLatitude, saveLongitude } from 'js/redux/actions/criteriaActions';
import { execute } from 'js/utils/utilities';

export default class Location extends Component {
  constructor () {
    super();
    this.state = {
      input: '6856 Alicia Court, Alexandria, VA 22310'
    };
  }

  render () {
    return (
      <div id='location' className='column-container'>
        <TextField
          multiLine={true}
          rowsMax={3}
          className='text-field'
          hintText='Enter your destination'
          defaultValue='6856 Alicia Court, Alexandria, VA 22310'
          onChange={ this.handleInputChange }/>
        <RaisedButton
          className='btn'
          label='Search Address'
          onClick={ this.searchAddress } />
      </div>
    );
  }

  handleInputChange = (event, newValue) => {
    // If the user presses enter - go search
    if (event.which === 13 || event.keyCode === 13) {
      this.searchAddress();
    } else {
      this.setState({ input: newValue });
    }
  }

  searchAddress = () => {
    const base = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    const address = this.state.input.split(' ').join('+');
    const key = `&key=${process.env.GOOGLE_GEOCODE_API_KEY}`;
    const url = base + address + key;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      // Request is finished
      if (xmlhttp.readyState === 4) {
        // Request is OK
        if (xmlhttp.status === 200) {
          // Grab first return
          const result = xmlhttp.response.results[0];
          const { lat, lng } = result.geometry.location;
          const formattedAddress = result.formatted_address;

          console.log(lat, lng, formattedAddress);
          store.dispatch(saveLatitude(lat));
          store.dispatch(saveLongitude(lng));
          execute();
        }
      }
    };

    xmlhttp.open('GET', url);
    xmlhttp.responseType = 'json';
    xmlhttp.send();
  }
}
