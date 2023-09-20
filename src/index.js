import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import isPropValid from '@emotion/is-prop-valid';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'UI/GlobalStyles';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { lightTheme } from 'UI/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter basename="/rent-car-project">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
);
