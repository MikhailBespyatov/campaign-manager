import {
    activeColor,
    ballBackground,
    ballBorderRadius,
    ballBoxShadow,
    ballDiameter,
    ballTopPosition,
    defaultColor,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperWidth
} from 'components/common/inputs/Switch/constants';
import { transitionTime } from 'constants/styles';
import styled from 'styled-components';
import { Active } from 'types';

export const Wrapper = styled.div<Active>`
    position: relative;
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    background-color: ${({ active }) => (active ? activeColor : defaultColor)};
    cursor: pointer;
    transition: ${transitionTime};
`;

export const Ball = styled.div<Active>`
    position: absolute;
    top: ${ballTopPosition};
    left: ${({ active }) => (active ? `calc(${wrapperWidth} - ${ballDiameter})` : '0')};
    width: ${ballDiameter};
    height: ${ballDiameter};
    border-radius: ${ballBorderRadius};
    background-color: ${ballBackground};
    box-shadow: ${ballBoxShadow};
    transition: ${transitionTime};
    //z-index: 2;
`;
