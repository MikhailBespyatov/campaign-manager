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
import { flexStart, hoverGrey } from 'constants/styles';
import styled, { css } from 'styled-components';
import { Active, Disabled, IsWithoutBorder, PaddingRight, Sizes } from 'types';

interface WrapperProps extends Sizes, IsWithoutBorder, PaddingRight, Disabled {
    isDarkStyle?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    ${flexStart};
    align-items: center;
    min-width: ${({ width }) => (width ? width : wrapperWidth)};
    height: ${({ height }) => height || wrapperHeight};
    border-radius: ${wrapperBorderRadius};
    ${({ withoutBorder }) => !withoutBorder && `border: ${wrapperBorderWidth} solid ${wrapperBorderColor}`};
    padding: 0 ${({ paddingRight }) => paddingRight || wrapperHorizontalPadding};
    background-color: ${wrapperBackground};
    cursor: pointer;
    //z-index: 1;
    ${({ disabled }) => disabled && 'opacity: 0.5;'};
    ${({ isDarkStyle }) =>
        isDarkStyle &&
        css`
            border-radius: 4px;
            border: 0;
            background-color: ${hoverGrey};
        `}
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
