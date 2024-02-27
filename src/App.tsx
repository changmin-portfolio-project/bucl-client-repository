import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import AppInit from './AppInit';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppInit />
      <Reset />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
