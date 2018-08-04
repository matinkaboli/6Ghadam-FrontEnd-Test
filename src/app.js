import { render } from 'react-dom';
import React, { Component } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import RTL from './configs/rtl';
import theme from './configs/theme';
import Components from './components';

class Client extends Component {
  render() {
    return (
      <Router>
        <div dir='rtl'>
          <RTL>
            <MuiThemeProvider theme={theme}>
              <CssBaseLine>
                <Components />
              </CssBaseLine>
            </MuiThemeProvider>
          </RTL>
        </div>
      </Router>
    );
  }
}

import './css/font.css';
import './css/index.css';

render(<Client />, document.getElementById('main'));
