import {
    buttonBorderRadius,
    buttonBorderWidth,
    buttonHeight,
    buttonHorizontalPadding,
    buttonVerticalPadding,
    buttonWidth,
    hoverButtonColor,
    spanFontSize,
    spanLetterSpacing,
    spanLineHeight
} from 'components/common/buttons/RoundedButton/constants';
import { ButtonProps } from 'components/common/buttons/RoundedButton/types';
import {
    black,
    buttonActiveMixin,
    buttonDisabledMixin,
    disableDefaultButtonStyleMixin,
    formTextStyleMixin,
    reverseColor,
    transitionTime,
    white
} from 'constants/styles';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
    ${disableDefaultButtonStyleMixin};
    min-width: ${buttonWidth};
    height: ${buttonHeight};
    background-color: ${({ reverse }) => (reverse ? white : black)};
    border: ${buttonBorderWidth} solid ${({ reverse }) => (reverse ? reverseColor : 'none')};
    border-radius: ${buttonBorderRadius};
    color: ${white};
    //text-transform: uppercase;
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

export const Span = styled.span<ButtonProps>`
    ${formTextStyleMixin};
    color: ${({ reverse }) => (reverse ? reverseColor : white)};
    font-size: ${spanFontSize};
    line-height: ${spanLineHeight};
    text-align: center;
    letter-spacing: ${spanLetterSpacing};
    //text-transform: uppercase;
    z-index: 1;
`;
