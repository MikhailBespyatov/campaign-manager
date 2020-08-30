import { SpanProps } from 'components/common/TextComponents/Span/types';
import styled from 'styled-components';

export const Span = styled.span<SpanProps>`
    color: ${({ color }) => (color ? color : 'black')};
`;
