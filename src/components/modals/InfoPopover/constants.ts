export const popoverArrowDiameter = '14px';
export const popoverArrowHalfDiameter = '7px';

export const calculatePopoverRight = (childrenWidth: number) => childrenWidth / 2 + 30 + 'px';

export const calculatePopoverArrowRight = (childrenWidth: number) =>
    childrenWidth / 2 + 35 + parseInt(popoverArrowHalfDiameter) + 'px';

export const calculatePopoverArrowTop = (childrenHeight: number) => childrenHeight + 7 + 'px';
export const calculatePopoverTop = (childrenHeight: number) => childrenHeight + 13 + 'px';
