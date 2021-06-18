import { grey5, padding, red, tertiaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';
import { IsExpiredBorder } from 'types';

export const DateOfCampaignWrapper = styled.div<IsExpiredBorder>`
    width: 300px;
    height: fit-content;
    padding: ${padding};
    border: 1px solid ${({ isExpiredBorder }) => (isExpiredBorder ? red : grey5)};
    border-radius: ${tertiaryBorderRadius};
`;
