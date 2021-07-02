import { Span } from 'components/common/typography/Span';
import {
    blue,
    ellipsisMixin,
    formGrey3,
    formGrey5,
    formGrey6,
    grey4,
    primaryColor,
    tertiaryBorderRadius
} from 'constants/styles';
import styled, { css } from 'styled-components';
import { Disabled, Padding } from 'types';

export const Wrapper = styled.div`
    width: 100%;
`;

export const LabelNameSpan = styled(Span)`
    font-style: normal;
    font-weight: 400;
    line-height: ${({ lineHeight }) => lineHeight || '17px'};
    color: ${grey4};
`;

export const ErrorSpan = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: ${formGrey6};
`;

export const inputTextColorMixin = css<Disabled>`
    color: ${({ disabled }) => (disabled ? formGrey5 : primaryColor)};
`;

export const TextFieldForm = styled.input<Padding>`
    outline: none;
    appearance: none;
    width: 100%;
    height: 40px;
    padding-left: ${({ paddingLeft }) => paddingLeft || '16px'};
    padding-right: ${({ paddingRight }) => paddingRight || '16px'};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    ${inputTextColorMixin};
    border: 1px solid ${formGrey3};
    border-radius: ${tertiaryBorderRadius};

    ${ellipsisMixin}

    ::placeholder {
        ${inputTextColorMixin};
    }

    :focus-within {
        border: 1px solid ${blue};
    }
`;
