import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import green from '@material-ui/core/colors/green';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'white',
    backgroundColor: green[500],
  },
});

class Appbar extends Component {
  render() {
    return (
      <div>
        <AppBar position='fixed' className={this.props.classes.appBar}>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              پنل مدیریت ۶ قدم
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Appbar);