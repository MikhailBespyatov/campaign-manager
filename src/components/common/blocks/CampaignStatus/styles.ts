import styled from 'styled-components';
import { Color } from 'types';
import { grey4 } from 'constants/styles';

export const StatusText = styled.span<Color>`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    text-transform: uppercase;
    text-align: right;
    ${({ color }) => color && `color: ${color}`}
`;

export const RemainingText = styled.span<Color>`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    text-transform: uppercase;
    text-align: right;
    color: ${grey4};
`;

export const CampaignStatusWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`;
