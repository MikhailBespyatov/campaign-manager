import { Img } from 'components/common/imageComponents/CustomImg/styles';
import { CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox/index';
import { blue, flexCenter, grey9, transitionTime, white } from 'constants/styles';
import styled, { css } from 'styled-components';
import { checkboxBorderRadius, checkboxDiameter } from './constants';

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: middle;
    display: flex;
    justify-content: left;
    align-items: center;
`;

export const Label = styled.label`
    ${flexCenter};
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const VisibleCheckbox = styled.div<Pick<CheckboxProps, 'disabled' | 'checked'>>`
    width: ${checkboxDiameter};
    height: ${checkboxDiameter};
    background: ${({ checked }) => (checked ? blue : white)};
    border: 2px solid ${({ checked }) => (checked ? blue : grey9)};
    border-radius: ${checkboxBorderRadius};
    transition: ${transitionTime};
    cursor: pointer;

    ${({ disabled }) =>
        disabled &&
        css`
            cursor: not-allowed;
        `};

    ${Img} {
        visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    }
`;
