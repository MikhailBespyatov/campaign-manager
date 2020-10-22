import src from 'assets/img/wom_logo.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { womLogoDivider } from 'constants/styles';
import React from 'react';

interface Props {
    height: string;
}

export const WomCurrencyImg = ({ height }: Props) => {
    const width = `calc(${height} / ${womLogoDivider})`;

    return <CustomImg height={height} src={src} width={width} />;
};
