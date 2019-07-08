import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

import { createTheme, ThemeProvider } from '../themes';

const theme = createTheme({
  customColor: {
    Main_Primary: '#000',
  },
});

storiesOf('_Usage', module).add('Theme Change', () => (
  <>
    <ThemeProvider theme={theme}>
      <Button color="primary">Default</Button>
    </ThemeProvider>
  </>
));
