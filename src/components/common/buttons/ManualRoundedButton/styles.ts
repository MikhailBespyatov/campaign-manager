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
} from 'components/common/buttons/ManualRoundedButton/constants';
import { ButtonProps, InnerSpanProps } from 'components/common/buttons/ManualRoundedButton/types';
import {
    buttonActiveMixin,
    buttonDisabledMixin,
    disableDefaultButtonStyleMixin,
    transitionTime
} from 'constants/styles';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
    ${disableDefaultButtonStyleMixin};
    min-width: ${({ minWidth }) => (minWidth ? minWidth : buttonWidth)};
    ${({ width }) => width && `width: ${width};`};
    height: ${({ height }) => (height ? height : buttonHeight)};
    background: ${({ reverse, background, mainColor, theme: { primaryColor, primaryTextColor } }) =>
        reverse && background
            ? background
            : reverse
            ? mainColor
                ? mainColor
                : primaryTextColor
            : background
            ? background
            : primaryColor};
    border: ${buttonBorderWidth} solid
        ${({ reverse, mainColor, theme: { primaryColor } }) => (reverse ? mainColor || primaryColor : 'none')};
    border-radius: ${({ borderRadius }) => borderRadius || buttonBorderRadius};
    /* ${({ theme: { primaryTextColor }, mainColor }) => (mainColor ? mainColor : primaryTextColor)}; */
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

export const InnerSpan = styled.span<InnerSpanProps>`
    color: ${({ theme: { secondaryTextColor, primaryColor }, reverse, mainColor }) =>
        mainColor || (reverse ? primaryColor : secondaryTextColor)};
    font-size: ${({ fontSize }) => fontSize || spanFontSize};
    font-weight: ${({ fontWeight }) => fontWeight || spanFontWeight};
    line-height: ${({ lineHeight }) => lineHeight || spanLineHeight};
`;
