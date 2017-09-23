import React, { Component } from 'react';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

import { isEmpty } from 'js/utils/utilities';

export default class Weather extends Component {
  render () {
    const { result } = this.props;
    let list = null;

    if (!isEmpty(result)) {
      list = Object.entries(result.summary).map(entry => {
        return (<ListItem primaryText={ entry[0] } secondaryText={ entry[1] } />);
      });
    }

    return (
      <List>
        { list }
      </List>
    );
  }
}
