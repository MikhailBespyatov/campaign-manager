import { ImgWrapperProps } from 'components/common/ImageComponents/AbsoluteImg/types';
import styled from 'styled-components';

export const ImgWrapper = styled.div<ImgWrapperProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${({ backgroundColor }) => (backgroundColor ? `background-color: ${backgroundColor};` : ``)};
    z-index: 1;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
