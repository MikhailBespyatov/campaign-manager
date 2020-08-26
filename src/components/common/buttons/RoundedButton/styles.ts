import {
    buttonBorderRadius,
    buttonHeight,
    buttonMarginBottom,
    buttonWidth,
    spanFontSize,
    spanLetterSpacing,
    spanLineHeight
} from 'components/common/buttons/RoundedButton/constants';
import styled from 'styled-components';
import {
    black,
    buttonActiveMixin,
    buttonDisabledMixin,
    disableDefaultButtonStyleMixin,
    formTextStyleMixin,
    transitionTime,
    white
} from '../../../../constants';

export const Button = styled.button`
    ${disableDefaultButtonStyleMixin};
    width: ${buttonWidth};
    height: ${buttonHeight};
    background-color: ${black};
    border-radius: ${buttonBorderRadius};
    color: ${white};
    text-transform: uppercase;
    margin-bottom: ${buttonMarginBottom};
    transition: ${transitionTime};
    :hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
    :disabled {
        ${buttonDisabledMixin};
    }
    :active {
        ${buttonActiveMixin};
    }
    z-index: 2;
`;

export const Span = styled.span`
    ${formTextStyleMixin};
    font-size: ${spanFontSize};
    line-height: ${spanLineHeight};
    text-align: center;
    letter-spacing: ${spanLetterSpacing};
    text-transform: uppercase;
    z-index: 1;
`;
