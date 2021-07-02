export const popoverArrowDiameter = '14px';
export const popoverArrowHalfDiameter = '7px';

export type PopoverType = 'left' | 'right';

export const calculatePopoverShift = (childrenWidth: number) =>
    childrenWidth < 20 ? '-10px' : childrenWidth / 3 + 'px';

export const calculatePopoverArrowRight = (childrenWidth: number) =>
    childrenWidth < 20 ? '0px' : childrenWidth / 2 + parseInt(popoverArrowHalfDiameter) + 'px';

export const calculatePopoverArrowTop = (childrenHeight: number) => childrenHeight + 7 + 'px';
export const calculatePopoverTop = (childrenHeight: number) => childrenHeight + 13 + 'px';
