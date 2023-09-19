import 'modern-normalize';
import manropeMedium from './fonts/Manrope-Medium.woff2';
import manropeBold from './fonts/Manrope-Bold.woff2';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: Manrope;
    font-weight: 500;
    src: url(${manropeMedium}) format('woff2');
    font-display: fallback;
}

@font-face {
    font-family: Manrope;
    font-weight: 600;
    src: url(${manropeBold}) format('woff2');
    font-display: fallback;
}


html {
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;
    .no-scroll {
      overflow-y: hidden;
    }
}
`;
