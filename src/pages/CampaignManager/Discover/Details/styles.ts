import {
    wrapperBorderColor,
    wrapperBorderRadius,
    wrapperBorderWidth,
    wrapperHorizontalPadding,
    wrapperVerticalPadding
} from 'pages/CampaignManager/Discover/Details/constants';
import styled from 'styled-components';

export const ContentWrapper = styled.div`
    min-width: 100%;
    border: ${wrapperBorderWidth} solid ${wrapperBorderColor};
    border-radius: ${wrapperBorderRadius};
    padding: ${wrapperVerticalPadding} ${wrapperHorizontalPadding};
`;
