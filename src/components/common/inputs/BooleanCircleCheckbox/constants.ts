import { formGrey3, secondaryBorderWidth, secondaryColor } from 'constants/styles';

const borderWidth = secondaryBorderWidth;

export const activeColor = secondaryColor;
export const inactiveColor = formGrey3;

export const checkboxDiameter = '20px';
export const checkboxBorderRadius = '50%';
export const checkboxActiveBorder = `${borderWidth} solid ${activeColor}`;
export const checkboxInactiveBorder = `${borderWidth} solid ${inactiveColor}`;
export const checkboxFocusShadow = `0 0 0 2px ${activeColor};`;
export const checkboxTransition = 'border ease 0.1s';

export const ballDiameter = '14px';
export const ballPosition = `calc((${checkboxDiameter} - ${ballDiameter}) / 2 - ${secondaryBorderWidth})`;
export const ballBackground = activeColor;
