import React from 'react';
import red from '@material-ui/core/colors/red';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 15,
    width: '100%',
    color: red[500],
    marginTop: theme.spacing.unit * 8.3,
    backgroundColor: theme.palette.common.primary,
 },
});

function SystemControl(props) {
  return (
    <div className={props.classes.root}>
      <p>خالی!</p>
    </div>
  );
}

export default withStyles(styles)(SystemControl);
