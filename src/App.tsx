import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './AppRouter';
import { Reset } from 'styled-reset';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import AppInit from './AppInit';

const App: React.FC = () => {
  const handleResize = () => {
    const root = document.getElementById('root');
    if (root) {
      root.style.height = `${window.innerHeight}px`;
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppInit />
      <Reset />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
