import * as React from 'react';
import { configure, addDecorator  } from '@storybook/react';
import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/globalStyle.js';

const req = require.context('../components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const withGlobal = (cb) => (<ThemeProvider theme={theme}><><GlobalStyles/>{cb()}</></ThemeProvider>);
addDecorator(withGlobal);
configure(loadStories, module);
