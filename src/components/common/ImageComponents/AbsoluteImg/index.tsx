import { Img, ImgWrapper } from 'components/common/ImageComponents/AbsoluteImg/styles';
import React from 'react';
import { defaultImgAlt } from '../../../../constants';

interface Props {
    src: string;
    alt?: string;
    backgroundColor?: string;
}

export const AbsoluteImg = ({ src, alt = defaultImgAlt, backgroundColor }: Props) => (
    <ImgWrapper backgroundColor={backgroundColor}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
