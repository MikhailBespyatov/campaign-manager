import {
    buttonBorderRadius,
    buttonHeight,
    buttonMarginBottom,
    buttonWidth
} from 'components/FormComponents/Button/constants';
import styled from 'styled-components';
import {
    black,
    buttonActiveMixin,
    buttonDisabledMixin,
    disableDefaultButtonStyleMixin,
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
`;
