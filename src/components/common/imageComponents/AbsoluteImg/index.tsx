import { Img, ImgWrapper } from 'components/common/imageComponents/AbsoluteImg/styles';
import { defaultImgAlt } from 'constants/defaults';
import React from 'react';
import { Background, imgProperties, NoopClick, Pointer } from 'types';

interface Props extends Pointer, imgProperties, NoopClick, Background {}

export const AbsoluteImg = ({ src, alt = defaultImgAlt, background, pointer, onClick }: Props) => (
    <ImgWrapper background={background} pointer={pointer} onClick={onClick}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
