import { Img, ImgWrapper } from 'components/common/ImageComponents/CustomImg/styles';
import React from 'react';

interface Props {
    height: string;
    width: string;
    src: string;
    alt: string;
}

export const CustomImg = ({ height, width, src, alt }: Props) => (
    <ImgWrapper height={height} width={width}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
