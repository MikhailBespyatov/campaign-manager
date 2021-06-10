import { wrapperHeight, wrapperHorizontalPadding } from 'components/common/inputs/Select/constants';
import { blue } from 'constants/styles';

export const paginationCellWidth = '38px';
export const paginationCellHeight = '38px';
export const paginationCellBorderRadius = '50%';
export const paginationCellBackground = 'white';
export const paginationCellActiveBackground = blue;
export const paginationCellColor = 'black';
export const paginationCellActiveColor = 'white';
export const PaginationCellFontWeight = '600';
export const PaginationCellActiveFontWeight = '700';
export const PaginationCellFontSize = '13px';
export const PaginationCellActiveFontSize = '14px';
export const PaginationCellLineHeight = '16px';
export const PaginationCellActiveLineHeight = '17px';
export const PaginationCellLetterSpacing = '0';

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
