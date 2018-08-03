import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: 300,
    position: 'relative',
  },
});

class Section extends Component {
  render() {
    return (
      <Drawer
        variant='permanent'
        classes={{
          paper: this.props.classes.drawerPaper,
        }}
      >
        <div className={this.props.classes.toolbar} />
        <List>Hello</List>
        <Divider />
        <List>Hello</List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Section);
