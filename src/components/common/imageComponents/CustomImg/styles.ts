import { ImgWrapperProps } from 'components/common/imageComponents/CustomImg/types';
import { flexCenter } from 'constants/styles/mixins';
import styled from 'styled-components';

export const Img = styled.img<ImgWrapperProps>`
    width: ${({ width }) => (width ? width : 'auto')};
    height: ${({ height }) => (height ? height : '100%')};
    ${flexCenter};
    ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}; overflow: hidden`};
    overflow: hidden;
    ${({ rotate }) => rotate && `transform: rotate(${rotate}deg);`};
    ${({ pointer }) => pointer && 'cursor: pointer;'};
    background-size: auto;
    ${({ borderColor }) => borderColor && `border: 1px solid ${borderColor}`};
`;

// export const ImgWrapper = styled.div<ImgWrapperProps>`
//     width: ${({ width }) => (width ? width : 'auto')};
//     height: ${({ height }) => (height ? height : '100%')};
//     ${flexCenter};
//     ${({ borderRadius }) => (borderRadius ? `border-radius: ${borderRadius}; overflow: hidden` : ``)};
//     overflow: hidden;
//     ${({ rotate }) => (rotate ? `transform: rotate(${rotate}deg);` : ``)};
//     ${({ pointer }) => (pointer ? 'cursor: pointer;' : '')};
// `;
