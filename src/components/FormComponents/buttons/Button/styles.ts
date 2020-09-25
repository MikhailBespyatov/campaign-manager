import {
    buttonBorderRadius,
    buttonColor,
    buttonFontSize,
    buttonFontWeight,
    buttonHeight,
    buttonHoverBackground,
    buttonLineHeight,
    buttonMarginBottom,
    buttonWidth
} from 'components/FormComponents/buttons/Button/constants';
import {
    buttonActiveMixin,
    buttonDisabledMixin,
    disableDefaultButtonStyleMixin,
    transitionTime
} from 'constants/styles';
import styled from 'styled-components';
import { Background } from 'types';

export const Button = styled.button<Background>`
    ${disableDefaultButtonStyleMixin};
    width: ${buttonWidth};
    height: ${buttonHeight};
    background: ${({ background }) => background};
    border-radius: ${buttonBorderRadius};
    font-weight: ${buttonFontWeight};
    font-size: ${buttonFontSize};
    line-height: ${buttonLineHeight};
    color: ${buttonColor};
    text-transform: uppercase;
    margin-bottom: ${buttonMarginBottom};
    transition: ${transitionTime};
    :hover {
        background-color: ${buttonHoverBackground};
    }
    :disabled {
        ${buttonDisabledMixin};
    }
    :active {
        ${buttonActiveMixin};
    }
`;
