import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Grid } from './Grid';

const Child1 = styled.div`
  width: 100%;
  height: 100px;
  background: #eee;
`;

storiesOf('Grid', module).add('All', () => (
  <>
    <Grid>
      <Grid item>
        <Child1 />
      </Grid>
      <Grid item xs="11">
        <Child1 />
      </Grid>
      <Grid item xs="10">
        <Child1 />
      </Grid>
      <Grid item xs="9">
        <Child1 />
      </Grid>
      <Grid item xs="8">
        <Child1 />
      </Grid>
      <Grid item xs="7">
        <Child1 />
      </Grid>
      <Grid item xs="6">
        <Child1 />
      </Grid>
      <Grid item xs="5">
        <Child1 />
      </Grid>
      <Grid item xs="4">
        <Child1 />
      </Grid>
      <Grid item xs="3">
        <Child1 />
      </Grid>
      <Grid item xs="2">
        <Child1 />
      </Grid>
      <Grid item xs="1">
        <Child1 />
      </Grid>
    </Grid>
  </>
));
