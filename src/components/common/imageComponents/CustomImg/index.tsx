import { Img, ImgWrapper } from 'components/common/imageComponents/CustomImg/styles';
import { defaultImgAlt } from 'constants/defaults';
import React, { MouseEvent } from 'react';
import { BorderRadiusProperties, imgProperties, Pointer, Rotation, Sizes } from 'types';

interface Props extends Rotation, Pointer, Sizes, imgProperties, BorderRadiusProperties {
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const CustomImg = ({ src, alt = defaultImgAlt, ...rest }: Props) => (
    <ImgWrapper {...rest}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
