import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { popoverArrowDiameter, popoverArrowHalfDiameter } from 'components/modals/InfoPopover/constants';
import { white } from 'constants/styles';
import styled from 'styled-components';

export const PopoverAbsoluteWrapper = styled(AbsoluteWrapper)`
    width: 440px;
    height: 60px;
    padding: 10px 15px;
    border-radius: 4px;
    background-color: ${white};
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
