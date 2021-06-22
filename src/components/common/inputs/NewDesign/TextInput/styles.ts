import { Span } from 'components/common/typography/Span';
import { blue, formGrey3, formGrey6, primaryColor, tertiaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';
import { Padding } from 'types';

export const Wrapper = styled.div`
    width: 100%;
`;

export const LabelNameSpan = styled(Span)`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgba(15, 22, 66, 0.5);
`;

export const ErrorSpan = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: ${formGrey6};
`;

export const TextFieldForm = styled.input<Padding>`
    outline: none;
    appearance: none;
    width: 100%;
    height: 38px;
    padding-left: ${({ paddingLeft }) => paddingLeft || '16px'};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${primaryColor};
    border: 1px solid ${formGrey3};
    border-radius: ${tertiaryBorderRadius};

    ::placeholder {
        color: ${primaryColor};
    }

    :focus-within {
        border: 1px solid ${blue};
    }
`;
