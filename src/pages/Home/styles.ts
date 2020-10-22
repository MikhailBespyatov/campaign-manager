import { blue, flexCenter } from 'constants/styles';
import { externalLinkBorderRadius, externalLinkHeight, externalLinkWidth } from 'pages/Home/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexCenter};
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const ExternalLink = styled.a`
    ${flexCenter};
    width: ${externalLinkWidth};
    height: ${externalLinkHeight};
    border-radius: ${externalLinkBorderRadius};
    background: ${blue};
`;
