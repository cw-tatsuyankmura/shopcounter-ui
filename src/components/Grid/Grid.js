import React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../themes';

const Component = ({ theme, className, children, item, wrap, justify, alignItems, xs, spacing }) => {
  let classNames;
  if (!item) {
    classNames = `container${wrap ? ' wrap' : ' nowrap'}${justify && !item ? justify : ''}${
      alignItems ? alignItems : ''
    }${spacing ? spacing : ''} ${className ? className : ''}`;
  } else if (item) {
    classNames = `item xs${item && xs ? xs : '12'} ${className ? className : ''}`;
  }
  return (
    <Base theme={theme} className={classNames}>
      {children}
    </Base>
  );
};

const Base = styled.div`
  ${({ theme }) => {
    return css`
      box-sizing: border-box;
      .container {
        width: 100%;
        display: flex;
      }
      .wrap {
        flex-wrap: wrap;
      }
      .item {
        &.xs12 {
          width: 100%;
        }
        &.xs11 {
          width: calc(11 * calc(100% / 12));
        }
        &.xs10 {
          width: calc(10 * calc(100% / 12));
        }
        &.xs9 {
          width: calc(9 * calc(100% / 12));
        }
        &.xs8 {
          width: calc(8 * calc(100% / 12));
        }
        &.xs7 {
          width: calc(7 * calc(100% / 12));
        }
        &.xs6 {
          width: 50%;
        }
        &.xs5 {
          width: calc(5 * calc(100% / 12));
        }
        &.xs4 {
          width: calc(4 * calc(100% / 12));
        }
        &.xs3 {
          width: 25%;
        }
        &.xs2 {
          width: calc(2 * calc(100% / 12));
        }
        &.xs1 {
          width: calc(100% / 12);
        }
      }
    `;
  }}
`;

export const Grid = withTheme(Component);
