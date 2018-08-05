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

class FurtherInfo extends Component {
  state = {
    prediction: '',
  };

  changeSelect = e => {
    this.setState({ prediction: e.target.value });
  };

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell>شماره تخمین</CustomTableCell>
              <CustomTableCell>شماره کاربری</CustomTableCell>
              <CustomTableCell>زمان ثبت</CustomTableCell>
              <CustomTableCell>زمان بررسی</CustomTableCell>
              <CustomTableCell>وضعیت</CustomTableCell>
              <CustomTableCell>عملیات</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>5b1f8a5f02980c0014e00df4</TableCell>
              <TableCell>5b1f896002980c0014e00df2</TableCell>
              <TableCell>۱۳۹۷/۳/۲۲ - ۱۳:۲۴</TableCell>
              <TableCell>۱۳۹۷/۳/۲۴ - ۲۲:۳۲</TableCell>
              <TableCell>برنده</TableCell>
              <TableCell>حذف</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(FurtherInfo);
