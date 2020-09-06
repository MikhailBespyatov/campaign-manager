import {
    buttonBorderRadius,
    buttonHeight,
    buttonHoverBackground,
    buttonMarginBottom,
    buttonWidth
} from 'components/FormComponents/Button/constants';
import styled from 'styled-components';
import { Background } from 'types';
import {
    black,
    buttonActiveMixin,
    buttonDisabledMixin,
    disableDefaultButtonStyleMixin,
    transitionTime,
    white
} from '../../../constants';

export const Button = styled.button<Background>`
    ${disableDefaultButtonStyleMixin};
    width: ${buttonWidth};
    height: ${buttonHeight};
    background: ${({ background }) => (background ? background : black)};
    border-radius: ${buttonBorderRadius};
    color: ${white};
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
