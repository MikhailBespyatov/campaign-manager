import { blue, buttonDisabledMixin, disableDefaultButtonStyleMixin } from 'constants/styles';
import styled from 'styled-components';

export const ResetButton = styled.button`
    ${disableDefaultButtonStyleMixin};
    font-style: normal;
    font-weight: 600;
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
