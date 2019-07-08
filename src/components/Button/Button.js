import React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../../themes';

const Component = ({ children, theme, fullWidth, onClick, variant = 'fill', color = 'default' }) => {
  const handleClick = e => {
    onClick && onClick(e);
  };
  const classNames = `${color} ${variant} ${fullWidth ? 'full' : 'auto'}`;
  return (
    <Base theme={theme} className={classNames} onClick={handleClick}>
      {children}
    </Base>
  );
};

const Base = styled.button`
  ${({ theme }) => {
    const { Color, Size } = theme;
    return css`
      display: inline-block;
      padding: 12px 24px;
      margin: 0;
      box-sizing: border-box;
      cursor: pointer;
      font-weight: 600;
      text-align: center;
      outline: none;
      border-radius: 3px;
      transition: all 0.2s ease-in-out;
      line-height: 1.4;
      text-decoration: none;
      font-size: ${Size.pxToRem(14)};

      &.auto {
        width: auto;
      }
      &.full {
        width: 100%;
      }

      &.fill {
        color: #ffffff;
        &.default {
          background: #8e8e8e;
          border: 1px solid #8e8e8e;
        }
        &.primary {
          background: ${Color.Main_Primary};
          border: 1px solid ${Color.Main_Primary};
        }
        &.secondary {
          background: ${Color.Main_Secondary};
          border-color: ${Color.Main_Secondary};
          border: 1px solid ${Color.Main_Secondary};
        }
      }

      &.outlined {
        color: ${Color.Text};
        background: #fff;
        &.primary {
          border: 1px solid ${Color.Main_Primary};
        }
        &.secondary {
          border: 1px solid ${Color.Main_Secondary};
        }
        &.default {
          border: 1px solid #8e8e8e;
        }
      }
    `;
  }}
`;

export const Button = withTheme(Component);
