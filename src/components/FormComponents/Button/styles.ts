import {
    buttonBorderRadius,
    buttonHeight,
    buttonMarginBottom,
    buttonWidth
} from 'components/FormComponents/Button/constants';
import styled from 'styled-components';
import { black, disableDefaultButtonStyleMixin, white } from '../../../constants';

export const Button = styled.button`
    ${disableDefaultButtonStyleMixin};
    width: ${buttonWidth};
    height: ${buttonHeight};
    background: ${black};
    border-radius: ${buttonBorderRadius};
    color: ${white};
    text-transform: uppercase;
    margin-bottom: ${buttonMarginBottom};
`;
