// custom typefaces
// import "typeface-montserrat"
// import "typeface-merriweather"
import './src/css/prism-themes/prism-a11y-dark.css';
import './src/css/style.scss';
import React from 'react';

import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;
