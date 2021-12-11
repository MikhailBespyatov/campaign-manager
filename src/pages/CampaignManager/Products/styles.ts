import { flexCenter, grey5 } from 'constants/styles';
import styled from 'styled-components';
import { Sizes } from 'types';
import { productThumbnailDiameter } from './Product/constants';

export const ProductThumbnail = styled.div<Sizes>`
    ${flexCenter}
    width:  ${({ width }) => width || productThumbnailDiameter};
    height: ${({ height }) => height || productThumbnailDiameter};
    border-radius: 50%;
    border: 1px solid ${grey5};
    overflow: hidden;
`;

export const ProductViewerWrapper = styled.div<Sizes>`
    ${flexCenter}
    width:  ${({ width }) => width || 'auto'};
    height: ${({ height }) => height || '600px'};
    border-radius: 8px;
    overflow: hidden;
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
