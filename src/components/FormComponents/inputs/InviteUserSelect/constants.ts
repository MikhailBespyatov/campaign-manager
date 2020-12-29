import { formGrey3, white } from 'constants/styles';
import { clickableWrapperDiameter } from 'components/grid/wrappers/ClicableWrapper/constants';

export const wrapperWidth = '150px';
export const wrapperHeight = '69px';
export const wrapperMarginRight = '32px';
export const wrapperBorderRadius = `10px`;
export const wrapperBorderWidth = '1px';
export const wrapperBorderColor = formGrey3;
export const wrapperHorizontalPadding = '25px';
export const wrapperBackground = white;

export const imgHeight = '10px';
export const wrapperImgTop = (parseInt(wrapperHeight) - parseInt(clickableWrapperDiameter)) / 2 + 'px'; //`calc((${wrapperHeight} - ${imgHeight}) / 2)`;
export const wrapperImgRight = '0';
export const imgWidth = '10px';

export const ulWrapperTop = `calc(${wrapperHeight} + 5px)`;

export const itemDefaultColor = white;
export const itemActiveColor = formGrey3;
