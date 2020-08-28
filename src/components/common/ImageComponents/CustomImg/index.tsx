import { Img, ImgWrapper } from 'components/common/ImageComponents/CustomImg/styles';
import React from 'react';
import { Rotation } from 'types';
import { defaultImgAlt } from '../../../../constants';

interface Props extends Rotation {
    height: string;
    width: string;
    src: string;
    alt?: string;
}

export const CustomImg = ({ height, width, src, alt = defaultImgAlt, rotate }: Props) => (
    <ImgWrapper height={height} rotate={rotate} width={width}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
