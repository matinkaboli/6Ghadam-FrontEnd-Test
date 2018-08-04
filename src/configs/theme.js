import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  direction: 'rtl',

  palette: {
    primary: {
      main: '#2c333f',
      contrastText: 'white',
    },
    secondary: {
      main: '#109bfc',
      contrastText: 'white',
    },
    background: {
      default: '#f6f7fb',
    }
  },
});
