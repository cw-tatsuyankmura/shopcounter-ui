import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import { Button } from './Button';

const Wrap = styled.div`
  margin-bottom: 20px;
`;

storiesOf('Button', module)
  .add('Color', () => (
    <>
      <Wrap>
        <Button>Default</Button>
      </Wrap>
      <Wrap>
        <Button color="primary">Primary</Button>
      </Wrap>
      <Wrap>
        <Button color="secondary">Secondary</Button>
      </Wrap>
    </>
  ))
  .add('Variant', () => (
    <>
      <Wrap>
        <Button color="primary">Fill</Button>
      </Wrap>
      <Wrap>
        <Button color="primary" variant="outlined">
          Outlined
        </Button>
      </Wrap>
    </>
  ))
  .add('Full Width', () => (
    <>
      <Wrap>
        <Button color="primary">Auto</Button>
      </Wrap>
      <Wrap>
        <Button color="primary" fullWidth>
          Full Width
        </Button>
      </Wrap>
    </>
  ));
