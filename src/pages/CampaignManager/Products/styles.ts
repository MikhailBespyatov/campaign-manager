import styled from 'styled-components';
import { grey5 } from 'constants/styles';
import { BackgroundImage } from 'types';
import { productThumbnailDiameter } from './Product/constants';

export const ProductThumbnail = styled.div<BackgroundImage>`
    width: ${productThumbnailDiameter};
    height: ${productThumbnailDiameter};
    border-radius: 50%;
    border: 1px solid ${grey5};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    ${({ backgroundImage }) => backgroundImage && `background-image: url(${backgroundImage});`}
    overflow: hidden;
`;
