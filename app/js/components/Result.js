import React, { Component } from 'react';

import { Card, CardHeader, CardMedia } from 'material-ui/Card';
import { isEmpty } from 'js/utils/utilities';

import Train from 'material-ui/svg-icons/maps/train';
import Bike from 'material-ui/svg-icons/maps/directions-bike';

import subway from 'images/subway.gif';
import bike from 'images/bike.gif';

import Weather from 'js/components/resultparts/Weather';

const headerTitleStyle = { fontSize: '3em' };
const headerSubtitleStyle = { fontSize: '2em' };

const iconStyle = {
  width: '75px',
  height: '75px'
};

export default class Result extends Component {
  render () {
    const { result } = this.props;
    const resultClassName = isEmpty(result) ? 'hidden' : '';

    let avatar = '';
    let image = null;
    let overlayTitle = '';
    let overlaySubtitle = '';

    if (!isEmpty(result)) {
      if (result.method === 'metro') {
        avatar = (<Train style={ iconStyle } />);
        image = subway;
        overlayTitle = 'Should catch the train';
        overlaySubtitle = 'Guess it\'s not the best day for a ride...';
      } else {
        avatar = (<Bike style={ iconStyle } />);
        image = bike;
        overlayTitle = 'Ride on!';
        overlaySubtitle = 'Things are looking good for a ride!';
      }
    }
    return (
      <div className={`full ${resultClassName}`} >
        <Card>
          <CardHeader
            avatar={ avatar }
            title={ overlayTitle }
            titleStyle={ headerTitleStyle }
            subtitle={ overlaySubtitle }
            subtitleStyle={ headerSubtitleStyle } />
          <CardMedia
            className='card-media'
            overlayStyle={{ padding: '0px !important' }}
            overlayContentStyle={{ height: '100%', width: '50%', padding: '0px' }}
            overlay={<Weather result={ this.props.result } /> }>
            <img className='card-media-image' src={ image } alt='' />
          </CardMedia>
        </Card>
      </div>
    );
  }
}
