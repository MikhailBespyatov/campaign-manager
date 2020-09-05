import styled from 'styled-components';
import { Margin } from 'types';

export const MarginWrapper = styled.div<Margin>`
    ${({ margin }) => (margin ? `margin: ${margin};` : ``)};
    ${({ marginLeft }) => (marginLeft ? `margin-left: ${marginLeft};` : ``)};
    ${({ marginTop }) => (marginTop ? `margin-top: ${marginTop};` : ``)};
    ${({ marginRight }) => (marginRight ? `marginRight: ${marginRight};` : ``)};
    ${({ marginBottom }) => (marginBottom ? `margin-bottom: ${marginBottom};` : ``)};
`;
