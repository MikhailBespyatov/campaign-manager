import {
    itemActiveColor,
    itemDefaultColor,
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperReverseBorderColor,
    wrapperWidth
} from 'components/common/inputs/RoleSelect/constants';
import { flexStart } from 'constants/styles';
import styled from 'styled-components';
import { Active, Reverse } from 'types';

export const Wrapper = styled.div<Reverse>`
    position: relative;
    ${flexStart};
    align-items: center;
    min-width: ${wrapperWidth};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    border: ${wrapperBorderWidth} solid ${({ reverse }) => (reverse ? wrapperReverseBorderColor : wrapperBorderColor)};
    padding: 0 ${wrapperHorizontalPadding};
    background-color: ${wrapperBackground};
`;

export const SelectUl = styled.ul`
    width: 100%;
    border-radius: ${wrapperBorderRadius};
    border: ${wrapperBorderWidth} solid ${wrapperBorderColor};
    overflow: hidden;
`;

export const SelectLi = styled.li<Active>`
    ${flexStart};
    align-items: center;
    width: 100%;
    min-height: ${wrapperHeight};
    padding: 0;
    padding-left: ${wrapperHorizontalPadding};
    background: ${({ active }) => (active ? itemActiveColor : itemDefaultColor)};
    cursor: pointer;
`;
