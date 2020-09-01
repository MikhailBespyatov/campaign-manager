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
    wrapperHorizontalPadding,
    wrapperWidth
} from 'components/common/inputs/LanguageSwitch/constants';
import styled from 'styled-components';
import { Active } from 'types';
import { flexCenter, transitionTime } from '../../../../constants';

export const Wrapper = styled.div<Active>`
    ${flexCenter};
    justify-content: ${({ active }) => (active ? 'flex-start' : 'flex-end')};
    position: relative;
    width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    padding-right: ${wrapperHorizontalPadding};
    padding-left: ${wrapperHorizontalPadding};
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
