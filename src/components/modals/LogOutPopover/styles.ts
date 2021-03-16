import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import {
    popoverArrowDiameter,
    popoverArrowHalfDiameter,
    popoverBackgroundColor,
    popoverBorderRadius,
    popoverHeight,
    popoverWidth
} from 'components/modals/LogOutPopover/constants';
import { white } from 'constants/styles';
import styled from 'styled-components';

export const PopoverAbsoluteWrapper = styled(AbsoluteWrapper)`
    width: ${popoverWidth};
    height: ${popoverHeight};
    padding-right: 15px;
    padding-bottom: 5px;
    border-radius: ${popoverBorderRadius};
    background-color: ${popoverBackgroundColor};
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
    z-index: 10;
`;

export const PopoverArrow = styled(AbsoluteWrapper)`
    width: ${popoverArrowDiameter};
    height: ${popoverArrowDiameter};
    z-index: 11;
    border: ${popoverArrowHalfDiameter} solid transparent;
    border-bottom: ${popoverArrowHalfDiameter} solid ${white};
    border-left: ${popoverArrowHalfDiameter} solid ${white};
    transform: rotate(135deg);
`;
