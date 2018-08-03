import rtl from 'jss-rtl';
import { create } from 'jss';
import React, { Component } from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import CssBaseLine from '@material-ui/core/CssBaseline';
import {
  jssPreset,
  createMuiTheme,
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Components from './components';

const jss = create({
  plugins: [
    ...jssPreset().plugins,
    rtl(),
  ],
});

const theme = createMuiTheme({
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

const generateClassName = createGenerateClassName();

function RTL(props) {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      {props.children}
    </JssProvider>
  );
}

export default class extends Component {
  render() {
    return (
      <div dir='rtl'>
        <RTL>
          <MuiThemeProvider theme={theme}>
            <CssBaseLine>
              <Components />
            </CssBaseLine>
          </MuiThemeProvider>
        </RTL>
      </div>
    );
  }
}
