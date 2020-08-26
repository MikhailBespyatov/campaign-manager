import { ImgWrapperProps } from 'components/common/ImageComponents/CustomImg/types';
import styled from 'styled-components';
import { flexCenter } from 'constants/styles/mixins';

export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    background-size: auto;
`;

export const ImgWrapper = styled.div<ImgWrapperProps>`
    width: ${({ width }) => (width ? width : '100%')};
    height: ${({ height }) => (height ? height : '100%')};
    ${flexCenter};
`;
