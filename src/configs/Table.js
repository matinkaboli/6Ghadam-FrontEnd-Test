import React from 'react';
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

const TableConfig = props => <Paper className={props.classes.root}>
  <Table>
    <TableHead>
      <TableRow>
        {props.head.map((v, i) =>
          <CustomTableCell key={i}>{v}</CustomTableCell>
        )}
      </TableRow>
    </TableHead>
    <TableBody>
      {props.body.map((v, i) =>
        <TableRow key={i}>
          {v.map((cellValue, cellKey) =>
            <TableCell key={cellKey}>{cellValue}</TableCell>
          )}
        </TableRow>
      )}
    </TableBody>
  </Table>
</Paper>;

export default withStyles(styles)(TableConfig);
