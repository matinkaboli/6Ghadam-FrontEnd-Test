import Tab from '@material-ui/core/Tab';
import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 8.3,
    backgroundColor: theme.palette.common.primary,
  },
});

class TabContainer extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  tabContainer() {
    for (let i = 0, l = this.props.tabs.length; i < l; ++i) {
      if (this.state.value === i) {
        const { Comp } = this.props.tabs[i];

        return <Comp />;
      }
    }
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position='static'>
          <Tabs value={this.state.value} onChange={this.handleChange}>
            {this.props.tabs.map((v, i) =>
              <Tab label={v.label} key={i} />
            )}
          </Tabs>
        </AppBar>

        {this.tabContainer()}
      </div>
    );
  }
}

export default withStyles(styles)(TabContainer);
