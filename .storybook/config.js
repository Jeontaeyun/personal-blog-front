import * as React from 'react';
import { configure, addDecorator  } from '@storybook/react';
import { createGlobalStyle } from "styled-components";
import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';

const GlobalStyles = createGlobalStyle`
  body {
    @import url("http://fonts.googleapis.com/earlyaccess/nanumgothic.css"); 
     font-family: 'Nanum Gothic', sans-serif;
     margin: 0;
     a {
        text-decoration: none;
      }
      a:focus{
        text-decoration: none;
      }
  }
`;

const req = require.context('../components', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const withGlobal = (cb) => (<ThemeProvider theme={theme}><><GlobalStyles/>{cb()}</></ThemeProvider>);
addDecorator(withGlobal);
configure(loadStories, module);
