import styled from 'styled-components';
import { blue, buttonDisabledMixin, disableDefaultButtonStyleMixin } from 'constants/styles';

export const ResetButton = styled.button`
    ${disableDefaultButtonStyleMixin};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: ${blue};

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
