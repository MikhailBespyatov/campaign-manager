import { Img, ImgWrapper } from 'components/common/ImageComponents/AbsoluteImg/styles';
import React from 'react';
import { Background, imgProperties, NoopClick, Pointer } from 'types';
import { defaultImgAlt } from '../../../../constants';

interface Props extends Pointer, imgProperties, NoopClick, Background {}

export const AbsoluteImg = ({ src, alt = defaultImgAlt, background, pointer, onClick }: Props) => (
    <ImgWrapper background={background} pointer={pointer} onClick={onClick}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
