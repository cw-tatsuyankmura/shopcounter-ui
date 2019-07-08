import * as Constants from './constants';

const defaultColor = {
  Text: Constants.Text,
  Main_Primary: Constants.Main_Primary,
  Main_Secondary: Constants.Main_Secondary,
  Blue: Constants.Blue,
  Blue_Light: Constants.Blue_Light,
  Green: Constants.Green,
  Green_Light: Constants.Green_Light,
  Yellow: Constants.Yellow,
  Yellow_Light: Constants.Yellow_Light,
  Red: Constants.Red,
  Red_Light: Constants.Red_Light,
};

export const createColor = customColor => {
  const custom = customColor || {};
  const color = {
    ...defaultColor,
    ...custom,
  };
  return color;
};
