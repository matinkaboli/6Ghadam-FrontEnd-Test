import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { withStyles } from '@material-ui/core/styles';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = {
  root: {
    width: '100%',
    overFlowX: 'auto',
  },
};

class TableConfig extends Component {
  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              {this.props.head.map((v, i) =>
                <CustomTableCell key={i}>{v}</CustomTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.body.map((v, i) =>
              <TableRow key={i}>
                {v.map(cell =>
                  <TableCell>{cell}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(TableConfig);
