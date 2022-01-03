import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from '@shopify/restyle';
import appDarkTheme from './src/theme';

import Routes from './src/Routes';
import HeaderTitleProvider from './src/contexts/HeaderTitle';

export default function App() {
  return (
    <ThemeProvider theme={appDarkTheme}>
      <HeaderTitleProvider>
        <Routes />
        <StatusBar style="light" />
      </HeaderTitleProvider>
    </ThemeProvider>
  );
}
