import styled from 'styled-components';
import { blue, formGrey6, primaryColor } from 'constants/styles';
import { Padding } from 'types';
import { Span } from 'components/common/typography/Span';
import { inputHeight } from 'components/common/inputs/NewDesign/TextInput/constants';

export const Wrapper = styled.div`
    width: 100%;
`;

export const LabelNameSpan = styled(Span)`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: ${primaryColor};
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
    height: ${inputHeight};
    padding-left: ${({ paddingLeft }) => paddingLeft || '28px'};
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: ${primaryColor};
    border: 1px solid ${primaryColor};
    border-radius: 8px;

    :focus-within {
        border: 1px solid ${blue};
    }
`;
