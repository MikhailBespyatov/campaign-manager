import {
    activeColor,
    ballBackground,
    ballBorderRadius,
    ballBoxShadow,
    ballDiameter,
    defaultColor,
    wrapperBorderRadius,
    wrapperHeight,
    wrapperWidth
} from 'components/common/inputs/Switch/constants';
import styled from 'styled-components';
import { Active } from 'types';
import { transitionTime } from '../../../../constants';

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
    top: -7px;
    ${({ active }) => (active ? 'right: 0;' : 'left: 0;')};
    width: ${ballDiameter};
    height: ${ballDiameter};
    border-radius: ${ballBorderRadius};
    background-color: ${ballBackground};
    box-shadow: ${ballBoxShadow};
    transition: ${transitionTime};
    //z-index: 2;
`;
