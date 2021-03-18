import { blue, flexCenter, white } from 'constants/styles';
import {
    externalLinkBorderRadius,
    externalLinkHeight,
    externalLinkHorizontalPadding,
    externalLinkWidth
} from 'pages/Home/constants';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexCenter};
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const ExternalLink = styled.a`
    ${flexCenter};
    //width: ${externalLinkWidth};
    height: ${externalLinkHeight};
    /* border-radius: ${externalLinkBorderRadius};
    background: ${blue}; */
    padding: 0 ${externalLinkHorizontalPadding};
    text-decoration: underline;
    color: ${white};
`;
