import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from '@shopify/restyle';
import appDarkTheme from './src/theme';

import Routes from './src/Routes';

export default function App() {
  return (
    <ThemeProvider theme={appDarkTheme}>
      <Routes />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
