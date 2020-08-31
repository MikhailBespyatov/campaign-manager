import summaryImg from 'assets/img/summary.svg';
import {
    imgHeight,
    imgWidth,
    spanFontSize,
    spanFontWeight,
    spanLineHeight,
    summaryColor
} from 'components/common/features/Budget/constants';
import { Wrapper } from 'components/common/features/Budget/styles';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { Span } from 'components/common/TextComponents/Span';
import React from 'react';

interface Props {
    summary: string;
}

export const Budget = ({ summary }: Props) => (
    <Wrapper>
        <CustomImg height={imgHeight} src={summaryImg} width={imgWidth} />
        <Span color={summaryColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
            {summary}
        </Span>
    </Wrapper>
);
