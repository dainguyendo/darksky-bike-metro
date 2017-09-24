import React, { Component } from 'react';
import * as Colors from 'material-ui/styles/colors';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import { isEmpty } from 'js/utils/utilities';

const tableBodyStyle = {
  overflow: 'scroll',
};

const fontBolderColorStyle = {
  fontWeight: 'bolder',
  color: Colors.grey50,
  fontSize: '14px',
  paddingLeft: '5px',
  paddingRight: '5px'
};

const fontColorStyle = {
  color: Colors.grey50,
  fontSize: '14px',
  paddingLeft: '5px',
  paddingRight: '5px'
};

const tableStyle = {
  backgroundColor: 'rgba(0,0,0,0)'
};

export default class Weather extends Component {
  render () {
    const { result } = this.props;
    let row = null;

    if (!isEmpty(result)) {
      row = Object.entries(result.summary).map((entry, idx) => {
        return (
          <TableRow key={ idx }>
            <TableRowColumn style={ fontBolderColorStyle }>{ `${entry[0]}` }</TableRowColumn>
            <TableRowColumn style={ fontColorStyle }>{ entry[1] }</TableRowColumn>
          </TableRow>
        );
      });
    }

    return (
      <Table
        fixedHeader={false}
        fixedFooter={false}
        height='100%'
        selectable={ false }
        style={ tableStyle }>
        <TableBody style={ tableBodyStyle } displayRowCheckbox={ false }>
          { row }
        </TableBody>
      </Table>
    );
  }
}
