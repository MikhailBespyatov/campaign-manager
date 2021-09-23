import { Span } from 'components/common/typography/Span';
import { description, stepColor, titleColor } from 'pages/CampaignManager/Channels/Help/constants';
import styled from 'styled-components';
import { MarginBottom } from 'types';

export const Title = styled(Span)`
    font-size: 26px;
    line-height: 32px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 14px;

    color: ${titleColor};
`;

export const Description = styled(Span)`
    font-size: 16px;
    line-height: 30px;

    color: ${description};
`;

export const StepText = styled(Span)`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 24px;

    color: ${stepColor};
`;

export const StepDescription = styled(Span)`
    font-size: 16px;
    line-height: 20px;
`;

export const NodeDescription = styled(Description)`
    font-size: 14px;
`;

export const StepWrapper = styled.div<MarginBottom>`
    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
`;
