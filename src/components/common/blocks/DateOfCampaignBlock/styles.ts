import styled from 'styled-components';
import { IsExpiredBorder } from 'types';
import { grey5, red } from 'constants/styles';

export const DateOfCampaignWrapper = styled.div<IsExpiredBorder>`
    width: 300px;
    height: 100px;
    padding: 19px 29px;
    border: 1px solid ${({ isExpiredBorder }) => (isExpiredBorder ? red : grey5)};
    border-radius: 8px;
`;
