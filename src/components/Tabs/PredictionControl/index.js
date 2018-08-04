import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 8.3,
    backgroundColor: theme.palette.common.primary,
  },
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

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
        {this.state.value === 0 && <TabContainer>Item One</TabContainer>}
        {this.state.value === 1 && <TabContainer>Item Two</TabContainer>}
        {this.state.value === 2 && <TabContainer>Item Three</TabContainer>}  
        {this.state.value === 3 && <TabContainer>Item Three</TabContainer>}  
        {this.state.value === 4 && <TabContainer>Item Three</TabContainer>}  
        {this.state.value === 5 && <TabContainer>Item Three</TabContainer>}  
      </div>  
    );
  }
}

export default withStyles(styles)(AllTabs);