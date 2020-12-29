import {
    buttonBorderRadius,
    buttonBorderWidth,
    buttonHeight,
    buttonHorizontalPadding,
    buttonVerticalPadding,
    buttonWidth,
    hoverButtonColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/common/buttons/RoundedButton/constants';
import { ButtonProps } from 'components/common/buttons/RoundedButton/types';
import {
    buttonActiveMixin,
    buttonDisabledMixin,
    disableDefaultButtonStyleMixin,
    transitionTime
} from 'constants/styles';
import styled from 'styled-components';
import { Reverse } from 'types';

export const Button = styled.button<ButtonProps>`
    ${disableDefaultButtonStyleMixin};
    min-width: ${({ minWidth }) => (minWidth ? minWidth : buttonWidth)};
    height: ${({ height }) => (height ? height : buttonHeight)};
    background: ${({ reverse, background, theme: { primaryColor, primaryTextColor } }) =>
        reverse ? primaryTextColor : background ? background : primaryColor};
    border: ${buttonBorderWidth} solid ${({ reverse, theme: { primaryColor } }) => (reverse ? primaryColor : 'none')};
    border-radius: ${buttonBorderRadius};
    //${({ theme: { primaryTextColor } }) => primaryTextColor};
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
    padding: ${buttonVerticalPadding} ${buttonHorizontalPadding};
    transition: ${transitionTime};
    :hover {
        background-color: ${hoverButtonColor};
    }
    :disabled {
        ${buttonDisabledMixin};
    }
    :active {
        ${buttonActiveMixin};
    }
    z-index: 2;
`;

export const InnerSpan = styled.span<Reverse>`
    color: ${({ theme: { secondaryTextColor, primaryColor }, reverse }) =>
        reverse ? primaryColor : secondaryTextColor};
    font-size: ${spanFontSize};
    font-weight: ${spanFontWeight};
    line-height: ${spanLineHeight};
`;
