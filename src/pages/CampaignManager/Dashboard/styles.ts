import styled from 'styled-components';
import { tableUniversalWrapperBorder, tableUniversalWrapperPadding } from 'pages/CampaignManager/Dashboard/constants';

export const DashboardBorder = styled.div`
    width: 100%;
    display: flex;
    padding: ${tableUniversalWrapperPadding};
    border: ${tableUniversalWrapperBorder};
    border-top: none;
`;
