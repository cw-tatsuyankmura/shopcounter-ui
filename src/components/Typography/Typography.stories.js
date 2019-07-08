import React from 'react';
import { storiesOf } from '@storybook/react';

import { Typography } from './Typography';

storiesOf('Typography', module)
  .add('All', () => (
    <>
      <Typography>Tag Type p</Typography>
      <Typography as="h1">Tag Type h1</Typography>
      <Typography as="h2">Tag Type h2</Typography>
      <Typography as="h3">Tag Type h3</Typography>
      <Typography as="h4">Tag Type h4</Typography>
      <Typography as="h5">Tag Type h5</Typography>
      <Typography as="h6">Tag Type h6</Typography>
    </>
  ))
  .add('Variant', () => (
    <>
      <Typography variant="p" as="h1">
        Tag Type p
      </Typography>
      <Typography variant="h1" as="h1">
        Tag Type h1
      </Typography>
      <Typography variant="h2" as="h1">
        Tag Type h2
      </Typography>
      <Typography variant="h3" as="h1">
        Tag Type h3
      </Typography>
      <Typography variant="h4" as="h1">
        Tag Type h4
      </Typography>
      <Typography variant="h5" as="h1">
        Tag Type h5
      </Typography>
      <Typography variant="h6" as="h1">
        Tag Type h6
      </Typography>
    </>
  ))
  .add('Bottom', () => (
    <>
      <Typography as="h2" variant="h2" bottom>
        Tag Type h2
      </Typography>
      <Typography as="h2" variant="h2">
        Tag Type h2
      </Typography>
    </>
  ))
  .add('Align', () => (
    <>
      <Typography align="left">Tag Type p</Typography>
      <Typography align="center">Tag Type p</Typography>
      <Typography align="right">Tag Type p</Typography>
    </>
  ));
