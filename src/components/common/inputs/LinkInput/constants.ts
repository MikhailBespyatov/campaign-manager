import { defaultFontSize } from '../../../../constants';

export const inputBackground = 'white';
export const labelColor = '#9EA1B3';
export const borderColor = '#3333FF';
export const disabledBorderColor = '#F0F0F0';
export const disabledColor = '#D7D7D7';

export const labelFontSize = '16px';
export const labelLineHeight = '20px';
export const labelFontWeight = '600';
export const labelMarginBottom = '5px';

export const inputWrapperWidth = '100%';
export const inputWrapperHeight = '50px';
export const inputWrapperBorderRadius = '30px';
export const inputWrapperBorderWidthLeft = '82px';
export const inputWrapperMarginBottom = '5px';
export const inputWrapperVerticalPadding = '12px';

export const absoluteTextLeft = `calc( -${inputWrapperBorderWidthLeft} + 20px)`;
export const absoluteTextTop = `calc((${inputWrapperHeight} - ${defaultFontSize} - 4px) / 2)`;

export const iconDiameter = '10px';
export const absoluteIconRight = `calc((${inputWrapperHeight} - ${iconDiameter}) / 2)`;
export const absoluteIconTop = `calc((${inputWrapperHeight} - ${iconDiameter}) / 2)`;

export const errorSpanHeight = '25px';
export const errorSpanMarginBottom = '15px';
