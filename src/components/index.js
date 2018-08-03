import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Tabs from './Tabs';
import AppBar from './AppBar';
import Section from './Section';

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
};

class Client extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar />
        <Section />
        <Tabs />
      </div>
    );
  }
}

export default withStyles(styles)(Client);