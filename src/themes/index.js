import React from 'react';
import { createColor } from './themeColor';
import { createSize } from './themeSize';

export const createTheme = customTheme => {
  const Color = createColor(customTheme && customTheme.customColor);
  const Size = createSize(customTheme && customTheme.customSize);
  return {
    Color,
    Size,
  };
};

const ThemeContext = React.createContext(createTheme());

export const withTheme = WrappedComponent => props => {
  const theme = React.useContext(ThemeContext);
  return <WrappedComponent theme={theme} {...props} />;
};

const { Provider } = ThemeContext;

export const ThemeProvider = ({ theme, children }) => {
  return <Provider value={theme}>{children}</Provider>;
};
