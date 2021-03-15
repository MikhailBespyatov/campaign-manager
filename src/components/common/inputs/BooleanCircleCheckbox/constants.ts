import { blue, formGrey3, grey14 } from 'constants/styles';

const borderWidth = '1px';

export const activeColor = blue;
export const inactiveColor = formGrey3;

export const checkboxDiameter = '10px';
export const checkboxBorderRadius = '50%';
export const checkboxActiveBorder = `${borderWidth} solid ${activeColor}`;
export const checkboxInactiveBorder = `${borderWidth} solid ${inactiveColor}`;
export const checkboxBorder = `${borderWidth} solid ${grey14}`;
export const checkboxFocusShadow = `0 0 0 2px ${activeColor};`;
export const checkboxTransition = 'border ease 0.1s';

export const ballDiameter = '6px';
export const ballPosition = `calc((${checkboxDiameter} - ${ballDiameter}) / 2 - ${borderWidth})`;
export const ballBackground = activeColor;
