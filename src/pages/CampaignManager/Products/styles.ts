import { flexCenter, grey5 } from 'constants/styles';
import styled from 'styled-components';
import { BackgroundImage } from 'types';
import { productThumbnailDiameter } from './Product/constants';

export const ProductThumbnail = styled.div<BackgroundImage>`
    ${flexCenter}
    width: ${productThumbnailDiameter};
    height: ${productThumbnailDiameter};
    border-radius: 50%;
    border: 1px solid ${grey5};
    overflow: hidden;
`;
