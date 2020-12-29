import {
    itemDefaultColor,
    wrapperBackground,
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHeight,
    wrapperHorizontalPadding,
    wrapperWidth
} from 'components/common/inputs/HistoricalSetSelect/constants';
import { flexStart, formGrey3 } from 'constants/styles';
import styled from 'styled-components';
import { Active, IsWithoutBorder, PaddingRight, Sizes } from 'types';

interface WrapperProps extends Sizes, IsWithoutBorder, PaddingRight {}

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    ${flexStart};
    align-items: center;
    min-width: ${({ width }) => (width ? width : wrapperWidth)};
    height: ${wrapperHeight};
    border-right: 1px solid ${formGrey3};
    border-left: 1px solid ${formGrey3};
    //border-radius: ${wrapperBorderRadius};
    ${({ withoutBorder }) => !withoutBorder && `border: ${wrapperBorderWidth} solid ${wrapperBorderColor}`};
    padding: 0 ${({ paddingRight }) => (paddingRight ? paddingRight : wrapperHorizontalPadding)};
    margin-left: -21px;
    background-color: ${wrapperBackground};
    z-index: 0;
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
    min-height: 50px;
    padding: 0;
    background: ${({ active, theme: { primaryColor } }) => (active ? primaryColor : itemDefaultColor)};
    cursor: pointer;
`;
