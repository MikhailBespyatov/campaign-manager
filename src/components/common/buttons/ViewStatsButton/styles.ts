import styled from 'styled-components';
import { disableDefaultButtonStyleMixin } from 'constants/styles';

export const ViewStatsButton = styled.button`
    ${disableDefaultButtonStyleMixin};
    font-style: normal;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;
    color: #ffffff;
    padding: 8px 16px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 24px;
`;
