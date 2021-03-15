export const selectorItemHeight = '37px';

export const selectorItemWrapperStandardPadding = '8px';
export const selectorItemWidth = '220px';
export const selectorItemMarginBottom = '5px';
export const selectorItemWrapperPaddingBottom =
    parseInt(selectorItemWrapperStandardPadding) - parseInt(selectorItemMarginBottom) + 'px';
export const selectorItemWrapperPadding = `${selectorItemWrapperStandardPadding} ${selectorItemWrapperStandardPadding} ${selectorItemWrapperPaddingBottom} ${selectorItemWrapperStandardPadding}`;

export const columnTypeSelectorWrapperWidth =
    parseInt(selectorItemWrapperStandardPadding) * 3 + parseInt(selectorItemWidth) * 2 + 'px';
export const listTypeSelectorWrapperWidth =
    parseInt(selectorItemWrapperStandardPadding) * 2 + parseInt(selectorItemWidth) + 'px';

export const selectorMarginBottom = '15px';
export const getItemsWrapperTop = (selectorHeight: number) => selectorHeight + parseInt(selectorMarginBottom) + 'px';

export const arrowWidth = '13px';
export const arrowHeight = '14px';

export const arrowBorder = '10px';
export const getArrowLeft = (selectorWidth: number) => selectorWidth / 2 - parseInt(arrowBorder) + 'px';

export const selectorWrapperHorizontalPadding = '16px';

//20 - lenght `+1...9` string
export const getTitleSpanWidth = (selectorWidth: number) =>
    selectorWidth - parseInt(selectorWrapperHorizontalPadding) * 2 - 20 + 'px';
