import { withStyles } from '@material-ui/core/styles';

const styles = (theme, other) => withStyles({
  root: {
    flexGrow: 1,
    padding: 15,
    width: '100%',
    marginTop: theme.spacing.unit * 8.3,
    backgroundColor: theme.palette.common.primary,
  },
  ...other,
});

export default styles;
