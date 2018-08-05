import Tab from '@material-ui/core/Tab';
import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

import Update from './Update';
import DataSurvey from './DataSurvey';
import FurtherInfo from './FurtherInfo';
import NewPrediction from './NewPrediction';
import ManagePredictions from './ManagePredictions';
import PredictionsCollection from './PredictionsCollection';

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
            <Tab label='مدیریت پیش بینی ها' />
            <Tab label='پیش بینی جدید' />
            <Tab label='به روز رسانی' />
            <Tab label='مجموعه پیش بینی' />
            <Tab label='اطلاعات تکمیلی' />
          </Tabs>
        </AppBar>
        {this.state.value === 0 && <DataSurvey />}
        {this.state.value === 1 && <ManagePredictions />}
        {this.state.value === 2 && <NewPrediction />}
        {this.state.value === 3 && <Update />}
        {this.state.value === 4 && <PredictionsCollection />}
        {this.state.value === 5 && <FurtherInfo />}
      </div>
    );
  }
}

export default withStyles(styles)(AllTabs);
