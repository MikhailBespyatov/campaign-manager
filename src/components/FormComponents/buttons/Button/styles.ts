import {
    buttonBorderRadius,
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
    grey15,
    transitionTime,
    white
} from 'constants/styles';
import styled from 'styled-components';
import { Background, Color, TextProperties } from 'types';

export interface StyledButtonProps extends Color, Background, TextProperties {}

export const StyledButton = styled.button<StyledButtonProps>`
    ${disableDefaultButtonStyleMixin};
    width: ${buttonWidth};
    height: ${buttonHeight};
    background: ${({ background }) => background};
    border-radius: ${buttonBorderRadius};
    font-weight: ${({ fontWeight }) => fontWeight || buttonFontWeight};
    font-size: ${buttonFontSize};
    line-height: ${buttonLineHeight};
    color: ${({ color }) => color || white};
    text-transform: uppercase;
    margin-bottom: ${buttonMarginBottom};
    transition: ${transitionTime};
    :hover {
        background-color: ${buttonHoverBackground};
    }
    :disabled {
        /* ${buttonDisabledMixin}; */
        background-color: ${grey15};
    }
    :active {
        ${buttonActiveMixin};
    }
`;
