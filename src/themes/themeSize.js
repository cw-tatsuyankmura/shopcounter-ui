import * as Constants from './constants';

/**
 *
 * @param {object} customSize
 * fontSize, spaceSize, MediaQuerySp, MediaQueryTb
 */
export const createSize = customSize => {
  const custom = customSize || {};
  const baseFontSize = custom.fontSize || Constants.BASE_FONT_SIZE;
  const baseSpaceSize = custom.spaceSize || Constants.BASE_SPACE_SIZE;
  const baseSp = custom.MediaQuerySp || Constants.MEDIA_QUERY_SP;
  const baseTb = custom.MediaQueryTb || Constants.MEDIA_QUERY_TB;

  const Font = {
    XXS: baseFontSize,
    XS: baseFontSize,
    S: baseFontSize,
    M: baseFontSize,
    L: baseFontSize,
    XL: baseFontSize,
    XXL: baseFontSize,
  };

  const Space = {
    XXS: baseSpaceSize,
    XS: baseFontSize * 2,
    S: baseFontSize * 3,
    M: baseFontSize * 4,
    L: baseFontSize * 5,
    XL: baseFontSize * 6,
    XXL: baseFontSize * 7,
  };

  const MediaQuery = {
    SP: baseSp,
    TB: baseTb,
  };

  return {
    Font,
    Space,
    MediaQuery,
    pxToRem: value => `${value / baseFontSize}rem`,
    BaseGrid: Constants.BASE_GIRD_SIZE,
  };
};
