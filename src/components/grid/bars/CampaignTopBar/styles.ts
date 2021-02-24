import styled from 'styled-components';
import { Active } from 'types';

export const StyledItem = styled.div<Active>`
    cursor: pointer;
    margin: 20px 60px 20px 0;
    opacity: 0.4;
    ${({ active }) => active && 'opacity: 1;'};
    transition: 1s;
`;
