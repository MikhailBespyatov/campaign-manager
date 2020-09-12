import {
    checkboxBorderRadius,
    checkboxDiameter,
    checkedBorderWidth,
    spanPadding
} from 'components/common/inputs/Radio/constants';
import { RadioProps } from 'components/common/inputs/Radio/types';
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

export const Radio = styled.input.attrs({ type: 'radio' })`
    ${disableDefaultCheckboxStyleMixin};
`;

export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

export const StyledRadio = styled.div<RadioProps>`
    display: inline-block;
    width: ${checkboxDiameter};
    height: ${checkboxDiameter};
    background: ${white};
    border-radius: ${checkboxBorderRadius};
    border: ${borderWidth} solid ${blue};
    ${({ checked }) => (checked ? `border-width: ${checkedBorderWidth}` : ``)};
    transition: ${transitionTime};
    cursor: pointer;
    ${({ disabled }) =>
        disabled ? `background: ${disabledGrey}; border-color: ${disabledGrey}; cursor: not-allowed` : ``};
    ${Radio}:focus + & {
        box-shadow: 0 0 0 3px ${blue};
    }
    // ${Icon} {
    //     visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    // }
`;

export const Label = styled.label`
    ${flexCenter};
`;

export const Span = styled.span<RadioProps>`
    padding-left: ${spanPadding};
    font-size: ${checkboxDiameter};
    color: ${({ checked }) => (checked ? blue : black)};
    ${({ disabled }) => (disabled ? `color: ${disabledGrey}` : ``)};
    transition: ${transitionTime};
`;
