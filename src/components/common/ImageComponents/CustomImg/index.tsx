import { Img, ImgWrapper } from 'components/common/ImageComponents/CustomImg/styles';
import React from 'react';
import { Pointer, Rotation, Sizes, NoopClick, imgProperties } from 'types';
import { defaultImgAlt } from '../../../../constants';

interface Props extends Rotation, Pointer, Sizes, NoopClick, imgProperties {}

export const CustomImg = ({ height, width, src, alt = defaultImgAlt, rotate, pointer, onClick }: Props) => (
    <ImgWrapper height={height} pointer={pointer} rotate={rotate} width={width} onClick={onClick}>
        <Img alt={alt} src={src} />
    </ImgWrapper>
);
