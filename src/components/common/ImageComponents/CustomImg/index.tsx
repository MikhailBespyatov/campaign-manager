import { Img, ImgWrapper } from 'components/common/ImageComponents/CustomImg/styles';
import { defaultImgAlt } from 'constants/defaults';
import React from 'react';
import { BorderRadiusProperties, imgProperties, NoopClick, Pointer, Rotation, Sizes } from 'types';

interface Props extends Rotation, Pointer, Sizes, NoopClick, imgProperties, BorderRadiusProperties {}

export const CustomImg = ({ src, alt = defaultImgAlt, ...rest }: Props) => (
    <ImgWrapper {...rest}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
