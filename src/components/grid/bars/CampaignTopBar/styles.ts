import { Span } from 'components/common/typography/Span';
import styled from 'styled-components';
import { Active } from 'types';

export const StyledItem = styled.div<Active>`
    cursor: pointer;
    margin: 0px 25px 15px 0;
    opacity: 0.4;
    ${({ active }) => active && 'opacity: 1;'};
    transition: 1s;

    &:hover {
        opacity: 1;
        transition: opacity 0.3s;
    }
`;

export const HoveredSpan = styled(Span)`
    font-size: 14px;
    line-height: 17px;
`;
