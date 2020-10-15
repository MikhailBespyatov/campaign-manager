import {
    disabledColor,
    errorSpanHeight,
    errorSpanMarginBottom,
    inputBackground,
    inputWrapperBorderRadius,
    inputWrapperHeight,
    inputWrapperMarginBottom,
    inputWrapperVerticalPadding,
    inputWrapperWidth,
    labelColor,
    labelFontSize,
    labelFontWeight,
    labelLineHeight,
    labelMarginBottom
} from 'components/common/inputs/TextInput/constants';
import { InputWrapperProps } from 'components/common/inputs/TextInput/types';
import { black, borderWidth, errorColor, formTextStyleMixin, successColor } from 'constants/styles';
import styled from 'styled-components';
import { WithError } from 'types';

export const Wrapper = styled.div`
    width: 100%;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: spacing(2);
    border: none;
    background: transparent;
    &::placeholder {
        font-weight: normal;
        color: ${black};
        opacity: 1;
    }
`;

export const InputWrapper = styled.div<InputWrapperProps>`
    position: relative;
    display: flex;
    align-items: center;
    border: ${borderWidth} solid ${({ error }) => (error ? errorColor : successColor)};
    background-color: ${inputBackground};
    ${({ disabled }) => (disabled ? `background-color: ${disabledColor}; border-color: ${disabledColor};` : ``)};
    border-radius: ${inputWrapperBorderRadius};
    overflow: hidden;
    width: ${inputWrapperWidth};
    height: ${inputWrapperHeight};
    margin-bottom: ${inputWrapperMarginBottom};
    padding-left: ${inputWrapperVerticalPadding};
    padding-right: ${inputWrapperVerticalPadding};
`;

export const Label = styled.label<WithError>`
    display: block;
    color: ${({ error }) => (error ? errorColor : labelColor)};
    // font-family: Montserrat;
    // font-style: normal;
    // font-weight: ${labelFontWeight};
    // font-size: ${labelFontSize};
    // line-height: ${labelLineHeight};
    ${formTextStyleMixin};
    margin-bottom: ${labelMarginBottom};
`;

export const ErrorSpan = styled.span`
    min-height: ${errorSpanHeight};
    min-width: 1px;
    color: ${errorColor};
    margin-bottom: ${errorSpanMarginBottom};
    display: flex;
`;
