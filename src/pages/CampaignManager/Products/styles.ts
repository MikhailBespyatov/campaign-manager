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
