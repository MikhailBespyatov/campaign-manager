import { Img, ImgWrapper } from 'components/common/imageComponents/AbsoluteImg/styles';
import { defaultImgAlt } from 'constants/defaults';
import React from 'react';
import { Background, imgProperties, NoopClick, Pointer, ZIndex } from 'types';

interface Props extends Pointer, imgProperties, NoopClick, Background, ZIndex {}

export const AbsoluteImg = ({ src, alt = defaultImgAlt, ...rest }: Props) => (
    <ImgWrapper {...rest}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
