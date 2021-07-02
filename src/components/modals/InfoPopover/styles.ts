import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { popoverArrowDiameter, popoverArrowHalfDiameter, PopoverType } from 'components/modals/InfoPopover/constants';
import { white } from 'constants/styles';
import styled from 'styled-components';
import { AbsoluteLocation, BackgroundColor, BorderProperties, Sizes } from 'types';

interface PopoverAbsoluteWrapperProps extends AbsoluteLocation, BackgroundColor, Pick<Sizes, 'width'> {
    type: PopoverType;
    horizontalPosition: string;
}

export const PopoverAbsoluteWrapper = styled.div<PopoverAbsoluteWrapperProps>`
    position: absolute;
    ${({ type, horizontalPosition }) =>
        type === 'left' ? `right: ${horizontalPosition}` : `left: ${horizontalPosition}`};

    ${({ top, bottom }) => (top ? `top: ${top}` : bottom ? `bottom: ${bottom}` : `top: 5px`)};

    width: ${({ width }) => width || '440px'};
    height: 60px;
    padding: 10px 15px;
    border-radius: 4px;
    background-color: ${({ backgroundColor }) => backgroundColor || white};
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
    z-index: 10;
`;

interface PopoverArrowProps extends Pick<BorderProperties, 'borderColor'> {}

export const PopoverArrow = styled(AbsoluteWrapper)<PopoverArrowProps>`
    width: ${popoverArrowDiameter};
    height: ${popoverArrowDiameter};
    z-index: 11;
    border: ${popoverArrowHalfDiameter} solid transparent;
    border-bottom: ${popoverArrowHalfDiameter} solid ${({ borderColor }) => borderColor || white};
    border-left: ${popoverArrowHalfDiameter} solid ${({ borderColor }) => borderColor || white};
    transform: rotate(135deg);
`;
