import { ImgWrapperProps } from 'components/common/imageComponents/AbsoluteImg/types';
import styled from 'styled-components';

export const ImgWrapper = styled.div<ImgWrapperProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ background }) => (background ? `background: ${background};` : ``)};
    z-index: 1;
    ${({ pointer }) => (pointer ? 'cursor: pointer;' : '')};
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
