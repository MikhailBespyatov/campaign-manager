import { wrapperHeight, wrapperHorizontalPadding } from 'components/common/inputs/Select/constants';
import { blue } from 'constants/styles';

export const paginationCellWidth = '34px';
export const paginationCellHeight = '34px';
export const paginationCellBorderRadius = '50%';
export const paginationCellLetterSpacing = '0';

export const paginationCellFontSize = '13px';
export const paginationCellFontWeight = '600';
export const paginationCellLineHeight = '16px';
export const paginationCellColor = 'black';
export const paginationCellBackground = 'white';

export const paginationCellActiveFontSize = '14px';
export const paginationCellActiveFontWeight = '700';
export const paginationCellActiveLineHeight = '17px';
export const paginationCellActiveColor = 'white';
export const paginationCellActiveBackground = blue;

export const paginationInputWidth = '62px';
export const paginationInputHeight = wrapperHeight;
export const paginationInputPadding = wrapperHorizontalPadding;

export const arrowImgWidth = '6px';
export const arrowImgHeight = '12px';

export const paginationWrapperHorizontalMargin = '8px';

export const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// * only odd whole non zero number
export const paginationLimit = 5;

export const pagination = Array.from({ length: paginationLimit }, () => 1);

export const sizeValues = ['10', '20', '50', '100'];
