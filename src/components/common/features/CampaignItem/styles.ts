import {
    itemHeight,
    itemHorizontalPadding,
    itemImgDiameter,
    itemVerticalPadding
} from 'components/common/features/CampaignItem/constants';
import { Span } from 'components/common/typography/Span';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { black, grey4, grey8, tertiaryBorderRadius } from 'constants/styles';
import styled from 'styled-components';
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
    border-radius: ${tertiaryBorderRadius};
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
    //justify-content: space-between;
    align-items: flex-end;
`;

export const CampaignSubtitle = styled.p`
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    color: ${black};
    padding: 0px;
    margin: 0px;
    letter-spacing: 1px;
`;

export const StyledSpan = styled(Span)`
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 1px;
    color: ${grey4};
`;

export const IncludedChannelWrapper = styled(Row)`
    height: 40px;
    width: 270px;
    padding: 10px 40px;
    margin-bottom: 8px;
    border: 1px solid ${grey8};
`;
