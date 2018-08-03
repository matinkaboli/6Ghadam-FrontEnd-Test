import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
};


import AppBar from './AppBar';
import Section from './Section';

class Client extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar />
        <Section />
      </div>
    );
  }
}

export default withStyles(styles)(Client);