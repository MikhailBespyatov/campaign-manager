import { formGrey3, successColor, white } from 'constants/styles';

export const wrapperWidth = '50px';
export const wrapperHeight = '25px';
export const wrapperBorderRadius = `calc(${wrapperHeight} / 2)`;

export const ballDiameter = '19px';
export const ballBorderRadius = '50%';
export const ballBackground = white;
export const ballMargin = `calc((${wrapperHeight} - ${ballDiameter}) / 2)`;
export const ballTopPosition = ballMargin;

export const defaultColor = formGrey3;
export const activeColor = successColor;
export const ballBoxShadow = '0px 2px 4px rgba(0, 0, 0, 0.25)';
