import { checkboxBorderRadius, checkboxDiameter } from './constants';
import { backgroundColor, blue, flexCenter, grey2, grey9, transitionTime, white } from 'constants/styles';
import styled from 'styled-components';
import { Img } from 'components/common/imageComponents/CustomImg/styles';
import { CheckboxProps } from 'components/common/inputs/NewDesign/Checkbox/index';

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
    border-radius: ${checkboxBorderRadius};
    border: 2px solid ${({ checked }) => (checked ? blue : grey9)};
    transition: ${transitionTime};
    cursor: pointer;
    ${({ disabled }) =>
        disabled ? `background: '${backgroundColor}'; border-color: ${grey2}; cursor: not-allowed` : ``};
    ${Img} {
        visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
    }
`;
