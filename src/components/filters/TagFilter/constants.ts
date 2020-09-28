import { wrapperHeight as closableTagHeight } from 'components/common/tags/ClosableTag/constants';
import { secondaryPadding } from 'constants/styles';

export const filterNameWidth = '70px';
export const filterMarginRight = '28px';

export const wrapperWidth = `calc(100% - ${filterNameWidth} - ${filterMarginRight})`;
export const wrapperVerticalPadding = secondaryPadding;
export const wrapperHeight = `calc(${closableTagHeight} + 2 * ${wrapperVerticalPadding})`;
export const wrapperBorderRadius = '35px';
export const wrapperBackground = '#EDEDED';
export const wrapperHorizontalPadding = wrapperVerticalPadding;

export const spanFontSize = '26px';
export const spanLineHeight = '32px';
export const spanColor = '#6B6B6B';

export const testArray = ['Adidas', 'EN'];
