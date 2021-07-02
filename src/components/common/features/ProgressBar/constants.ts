export const progressBarItemLineHeight = '17px';
export const pointItemTop = parseInt(progressBarItemLineHeight) + 23 + 'px';
export const pointItemDiameter = '16px';
export const pointItemHalfDiameter = parseInt(pointItemDiameter) / 2 + 'px';
export const pointItemLeft = `calc(50% - ${pointItemHalfDiameter})`;

export const donePointItemDiameter = '24px';
export const donePointItemHalfDiameter = parseInt(donePointItemDiameter) / 2 + 'px';
export const donePointItemBackgroundColor = '#E1FFDC';
export const donePointItemBorderColor = '#41d729';
export const donePointItemTop =
    parseInt(pointItemTop) - (parseInt(donePointItemDiameter) - parseInt(pointItemDiameter)) / 2 + 'px';
export const donePointItemLeft = `calc(50% - ${donePointItemHalfDiameter})`;

export const linePointItemHeight = '4px';
export const linePointItemTop =
    parseInt(pointItemTop) + parseInt(pointItemHalfDiameter) - parseInt(linePointItemHeight) / 2 + 'px';

export const inactivePointBackgroundColor = '#EAEAEA';
export const activePointBackgroundColor = '#bbbbd0';

export const progressBarHeight = parseInt(pointItemTop) + parseInt(donePointItemDiameter) + 'px';
export const progressBarVerticalPadding = '12px';
export const progressBarHorizontalPadding = '20px';

export const arrowDiameter = '11px';
