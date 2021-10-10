import { black, disableDefaultButtonStyleMixin } from 'constants/styles';
import styled from 'styled-components';

export const ViewStatsButton = styled.button`
    ${disableDefaultButtonStyleMixin};
    font-style: normal;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;
    color: #ffffff;
    padding: 9px 21px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 24px;

    &:hover {
        background-color: ${black};
        transition: background-color 0.3s;
    }
`;
