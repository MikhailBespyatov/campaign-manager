import { Img, ImgWrapper } from 'components/common/ImageComponents/CustomImg/styles';
import React from 'react';
import { BorderRadiusProperties, imgProperties, NoopClick, Pointer, Rotation, Sizes } from 'types';
import { defaultImgAlt } from '../../../../constants';

interface Props extends Rotation, Pointer, Sizes, NoopClick, imgProperties, BorderRadiusProperties {}

export const CustomImg = ({ src, alt = defaultImgAlt, ...rest }: Props) => (
    <ImgWrapper {...rest}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
