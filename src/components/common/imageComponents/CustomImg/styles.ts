import { ImgWrapperProps } from 'components/common/imageComponents/CustomImg/types';
import { flexCenter } from 'constants/styles/mixins';
import styled from 'styled-components';

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    background-size: auto;
`;

export const ImgWrapper = styled.div<ImgWrapperProps>`
    width: ${({ width }) => (width ? width : 'auto')};
    height: ${({ height }) => (height ? height : '100%')};
    ${flexCenter};
    ${({ borderRadius }) => (borderRadius ? `border-radius: ${borderRadius}; overflow: hidden` : ``)};
    overflow: hidden;
    ${({ rotate }) => (rotate ? `transform: rotate(${rotate}deg);` : ``)};
    ${({ pointer }) => (pointer ? 'cursor: pointer;' : '')};
`;
