import {
    itemActiveColor,
    itemDefaultColor,
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperWidth
} from 'components/common/inputs/Select/constants';
import { flexStart } from 'constants/styles';
import styled from 'styled-components';
import { Active, Sizes } from 'types';

export const Wrapper = styled.div<Sizes>`
    position: relative;
    ${flexStart};
    align-items: center;
    min-width: ${({ width }) => (width ? width : wrapperWidth)};
    height: ${wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    border: ${wrapperBorderWidth} solid ${wrapperBorderColor};
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
