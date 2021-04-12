import styled from 'styled-components';
import { buttonDisabledMixin, disableDefaultButtonStyleMixin, grey16 } from 'constants/styles';

export const ResetButton = styled.button`
    ${disableDefaultButtonStyleMixin};
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    text-decoration-line: underline;
    color: ${grey16};

    :hover {
        opacity: 0.7;
    }
    :disabled {
        ${buttonDisabledMixin};
    }
    :active {
        opacity: 0.9;
    }
    z-index: 2;
`;
