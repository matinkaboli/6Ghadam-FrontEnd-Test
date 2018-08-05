import Tab from '@material-ui/core/Tab';
import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

import DataSurvey from './DataSurvey';
import ManageTransactions from './ManageTransactions';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 8.3,
    backgroundColor: theme.palette.common.primary,
  },
});

class AllTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position='static'>
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab label='داده های آماری' />
            <Tab label='مدیریت تراکنش ها' />
          </Tabs>
        </AppBar>

        {this.state.value === 0 && <DataSurvey />}
        {this.state.value === 1 && <ManageTransactions />}
      </div>
    );
  }
}

export default withStyles(styles)(AllTabs);
