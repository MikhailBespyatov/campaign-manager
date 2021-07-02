import infoIcon from 'assets/icons/info_icon.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { infoIconDiameter } from 'components/common/imageComponents/InfoImg/constants';
import React from 'react';
import { Sizes } from 'types';

interface Props extends Sizes {}

export const InfoImg = ({ height, width }: Props) => (
    <CustomImg height={height || infoIconDiameter} src={infoIcon} width={width || infoIconDiameter} />
);
