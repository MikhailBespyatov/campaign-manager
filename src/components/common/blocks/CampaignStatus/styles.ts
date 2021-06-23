import { grey4 } from 'constants/styles';
import styled from 'styled-components';
import { Color } from 'types';

export const StatusText = styled.span<Color>`
    //font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 22px;
    text-transform: uppercase;
    text-align: right;
    ${({ color }) => color && `color: ${color}`}
`;

export const RemainingText = styled.span<Color>`
    //font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
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
