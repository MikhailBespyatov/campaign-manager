import styled from 'styled-components';
import { Span } from 'components/common/typography/Span';
import { primaryColor } from 'constants/styles';
import { Section } from 'components/grid/wrappers/FlexWrapper';

export const NoVideoSpan = styled(Span)`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    color: ${primaryColor};
    opacity: 0.5;
`;

export const SelectedVideoWrapper = styled(Section)`
    height: 100%;
    overflow-y: scroll;
`;
