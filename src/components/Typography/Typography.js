import React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../themes';

const Component = ({ theme, children, bottom, as = 'p', variant = 'p', align = 'left' }) => {
  const classNames = `${variant} ${align} ${bottom ? 'hasBottom' : 'noneBottom'}`;

  return (
    <Base as={as} className={classNames} theme={theme}>
      {children}
    </Base>
  );
};

const Base = styled.p`
  ${({ theme }) => {
    const { Color, Size } = theme;
    return css`
      margin: 0;

      &.center {
        text-align: center;
      }
      &.left {
        text-align: left;
      }
      &.right {
        text-align: right;
      }

      &.h1 {
        font-weight: 700;
        font-size: ${Size.pxToRem(42)};
        &.hasBottom {
          margin-bottom: ${Size.Space.L}px;
        }
      }
      &.h2 {
        font-weight: 700;
        font-size: ${Size.pxToRem(30)};
        &.hasBottom {
          margin-bottom: ${Size.Space.M}px;
        }
      }
      &.h3 {
        font-weight: 700;
        font-size: ${Size.pxToRem(24)};
        &.hasBottom {
          margin-bottom: ${Size.Space.S}px;
        }
      }
      &.h4 {
        font-weight: 700;
        font-size: ${Size.pxToRem(18)};
        &.hasBottom {
          margin-bottom: ${Size.Space.XS}px;
        }
      }
      &.error {
        color: ${Color.Red};
        &.hasBottom {
          margin-bottom: ${Size.Space.XXS}px;
        }
      }
      &.p {
        margin: 0 0 ${Size.Space.XXS}px;
        line-height: 1.8;
        font-weight: normal;
        font-size: ${Size.pxToRem(14)};
        &.hasBottom {
          margin-bottom: ${Size.Space.XXS}px;
        }
      }
    `;
  }}
`;

export const Typography = withTheme(Component);
