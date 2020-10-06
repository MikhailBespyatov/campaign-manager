import {
    buttonBorderRadius,
    buttonBorderWidth,
    buttonHeight,
    buttonHorizontalPadding,
    buttonVerticalPadding,
    buttonWidth
} from 'components/common/buttons/AddFieldButton/constants';
import { ButtonProps } from 'components/common/buttons/AddFieldButton/types';
import { blue, disableDefaultButtonStyleMixin, flexCenter, formGrey1, transitionTime } from 'constants/styles';
import styled from 'styled-components';

export const Button = styled.button<ButtonProps>`
    ${disableDefaultButtonStyleMixin};
    ${flexCenter};
    min-width: ${buttonWidth};
    height: ${buttonHeight};
    //background: ${formGrey1};
    border: ${buttonBorderWidth} dashed ${formGrey1};
    border-radius: ${buttonBorderRadius};
    margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0')};
    padding: ${buttonVerticalPadding} ${buttonHorizontalPadding};
    transition: ${transitionTime};
    :hover {
        border-color: ${blue};
    }
`;
