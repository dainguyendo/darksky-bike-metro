import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import moment from 'moment';
import { isEmpty } from 'js/utils/utilities';
import bike from 'images/bike.gif';
import metro from 'images/train.gif';

export default class ResultCard extends Component {
  constructor () {
    super();
  }

  render () {
    const { result } = this.props;
    let title = '';
    let image = null;
    let overlayTitle = '';
    let overlaySubtitle = '';
    let reasons = null;

    if (!isEmpty(result)) {
      if (result.method === 'metro') {
        image = metro;
        overlayTitle = 'Metro';
        overlaySubtitle = 'Guess it\'s not the best day for a ride...';
      } else {
        image = bike;
        overlayTitle = 'Bike';
        overlaySubtitle = 'Things are looking good for a ride!';
      }

      title = `${moment.unix(result.summary.time).format('dddd, MMMM Do YYYY, h:mm:ss a')}`;

      reasons = result.whyIShouldMetro.map(reason => {
        return (<div>{reason}</div>);
      });
    }

    return (
      <Card>
        <CardHeader
          title={ title } />
        <CardMedia
          overlay={<CardTitle title={ overlayTitle } subtitle={ overlaySubtitle } />} >
          <img className='bike' src={ image } alt='' />
        </CardMedia>
        <CardActions>
          { reasons }
        </CardActions>
      </Card>
    );
  }
}
