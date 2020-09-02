import {
    errorSpanHeight,
    errorSpanMarginBottom,
    inputBackground,
    inputWrapperBorderRadius,
    inputWrapperHeight,
    inputWrapperMarginBottom,
    labelColor,
    labelFontSize,
    labelFontWeight,
    labelLineHeight,
    labelMarginBottom
} from 'components/FormComponents/TextInput/constants';
import styled from 'styled-components';
import { WithError } from 'types';
import { black, borderWidth, errorColor, formTextStyleMixin } from '../../../constants';

export const Wrapper = styled.div`
    width: 100%;
`;

export const Input = styled.input`
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

export const InputWrapper = styled.div<WithError>`
    display: flex;
    align-items: center;
    border: ${borderWidth} solid ${({ error }) => (error ? errorColor : inputBackground)};
    background-color: ${inputBackground};
    border-radius: ${inputWrapperBorderRadius};
    overflow: hidden;
    height: ${inputWrapperHeight};
    margin-bottom: ${inputWrapperMarginBottom};
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
