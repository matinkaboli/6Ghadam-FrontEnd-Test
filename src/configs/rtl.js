import React from 'react';
import rtl from 'jss-rtl';
import { create } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  jssPreset,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName();

const jss = create({
  plugins: [
    ...jssPreset().plugins,
    rtl(),
  ],
});

export default props =>
  <JssProvider jss={jss} generateClassName={generateClassName}>
    {props.children}
  </JssProvider>;
