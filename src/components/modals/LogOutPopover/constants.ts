import { contentWrapperBorderRadius } from 'components/grid/wrappers/NewDesign/ContentWrapper/constants';
import { white } from 'constants/styles/colors';

export const popoverBorderRadius = contentWrapperBorderRadius;
export const popoverHeight = '44px';
export const popoverWidth = '95px';
export const popoverBackgroundColor = white;

export const popoverArrowDiameter = '14px';
export const popoverArrowHalfDiameter = '7px';

export const calculatePopoverLeft = (childrenWidth: string, popoverWidth: string) =>
    parseInt(childrenWidth) - parseInt(popoverWidth) + 10 + 'px';

export const calculatePopoverArrowLeft = (childrenWidth: string) =>
    parseInt(childrenWidth) - parseInt(popoverArrowHalfDiameter) - 14 + 'px';

export const calculatePopoverArrowTop = (childrenHeight: string) => parseInt(childrenHeight) + 'px';
export const calculatePopoverTop = (childrenHeight: string) => parseInt(childrenHeight) + 6 + 'px';
