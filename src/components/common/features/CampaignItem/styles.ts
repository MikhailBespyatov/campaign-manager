import styled from 'styled-components';
import {
    itemHeight,
    itemHorizontalPadding,
    itemImgDiameter,
    itemVerticalPadding
} from 'components/common/features/CampaignItem/constants';
import { Background, MarginRight } from 'types';

export const Item = styled.div`
    height: ${itemHeight};
    width: 100%;
    padding: ${itemVerticalPadding} ${itemHorizontalPadding};
    border: 1px solid #cfcfcf;
`;

export const ItemImgBlock = styled.div<Background>`
    width: ${itemImgDiameter};
    height: ${itemImgDiameter};
    background-size: cover;
    background-repeat: no-repeat;
    background-color: black;
    ${({ background }) => background && `background-image: url(${background})`};
    border-radius: 8px;
`;

export const CampaignDetail = styled.div<MarginRight>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    ${({ marginRight }) => marginRight && `margin-left: ${marginRight};`};
`;

export const CampaignStatusBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    align-items: flex-end;
`;
