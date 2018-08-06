import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

function SimpleSnackbar({ classes, open, message, onClose }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open}
      onClose={onClose}
      message={message}
      action={[
        <IconButton
          key="close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
}

export default withStyles(styles)(SimpleSnackbar);
