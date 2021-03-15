import {
    ballBackground,
    ballDiameter,
    ballPosition,
    checkboxBorder,
    checkboxBorderRadius,
    checkboxDiameter,
    checkboxFocusShadow
} from 'components/common/inputs/BooleanCircleCheckbox/constants';
import { CheckboxProps } from 'components/FormComponents/inputs/BooleanCheckbox/types';
import {
    blue,
    disableDefaultCheckboxStyleMixin,
    disabledGrey,
    flexCenter,
    transitionTime,
    white
} from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    ${disableDefaultCheckboxStyleMixin};
`;

export const Ball = styled.div`
    position: absolute;
    top: ${ballPosition};
    left: ${ballPosition};
    width: ${ballDiameter};
    height: ${ballDiameter};
    background: ${ballBackground};
    border-radius: ${checkboxBorderRadius};
    z-index: 2;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
    position: relative;
    display: inline-block;
    width: ${checkboxDiameter};
    height: ${checkboxDiameter};
    //background: ${({ checked }) => (checked ? blue : white)};
    border-radius: ${checkboxBorderRadius};
    border: ${checkboxBorder};
    transition: ${transitionTime};
    cursor: pointer;
    ${({ disabled }) =>
        disabled ? `background: ${disabledGrey}; border-color: ${disabledGrey}; cursor: not-allowed` : ``};
    ${HiddenCheckbox}:focus + & {
        box-shadow: ${checkboxFocusShadow};
    }
    ${Ball} {
        visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    }
`;

export const Label = styled.label`
    ${flexCenter};
`;
