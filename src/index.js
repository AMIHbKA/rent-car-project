import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'UI/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'UI/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter basename="/rent-car-project">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
