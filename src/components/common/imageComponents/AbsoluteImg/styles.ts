import { ImgWrapperProps } from 'components/common/imageComponents/AbsoluteImg/types';
import styled from 'styled-components';

export const ImgWrapper = styled.div<ImgWrapperProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ background }) => (background ? `background: ${background};` : ``)};
    ${({ pointer }) => (pointer ? 'cursor: pointer;' : '')};
    z-index: ${({ zIndex }) => (zIndex ? zIndex : '-1')};
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
