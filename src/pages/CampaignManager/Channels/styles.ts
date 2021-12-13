import styled from 'styled-components';
import { Sizes } from 'types';

export const ProductViewerWrapper = styled.div<Sizes>`
    width: ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || '600px'};
    border-radius: 8px;
    margin-right: 20px;
    background: #fff;
    padding: 20px;
    max-width: 325px;
    overflow: hidden;
`;

export const NoVideosContainer = styled.div<Sizes>`
    position: relative;
`;

export const NoVideosText = styled.div<Sizes>`
    position: absolute;
    top: calc(50% - 18px);
    left: auto;
    right: auto;
    text-align: center;
`;
