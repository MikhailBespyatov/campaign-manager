import { checkboxBorderRadius, checkboxDiameter, spanPadding } from 'components/common/inputs/Checkbox/constants';
import { CheckboxProps } from 'components/common/inputs/Checkbox/types';
import {
    black,
    blue,
    borderWidth,
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

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    ${disableDefaultCheckboxStyleMixin};
`;

export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
    display: inline-block;
    width: ${checkboxDiameter};
    height: ${checkboxDiameter};
    background: ${({ checked }) => (checked ? blue : white)};
    border-radius: ${checkboxBorderRadius};
    border: ${borderWidth} solid ${blue};
    transition: ${transitionTime};
    cursor: pointer;
    ${({ disabled }) =>
        disabled ? `background: ${disabledGrey}; border-color: ${disabledGrey}; cursor: not-allowed` : ``};
    ${Checkbox}:focus + & {
        box-shadow: 0 0 0 3px ${blue};
    }
    ${Icon} {
        visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    }
`;

export const Label = styled.label`
    ${flexCenter};
`;

export const Span = styled.span<CheckboxProps>`
    padding-left: ${spanPadding};
    font-size: ${checkboxDiameter};
    color: ${({ checked }) => (checked ? blue : black)};
    ${({ disabled }) => (disabled ? `color: ${disabledGrey}` : ``)};
    transition: ${transitionTime};
`;
