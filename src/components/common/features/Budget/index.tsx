import summaryImg from 'assets/img/summary.svg';
import {
    imgHeight,
    imgWidth,
    spanColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight
} from 'components/common/features/Budget/constants';
import { Wrapper } from 'components/common/features/Budget/styles';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import React from 'react';

interface Props {
    summary: string;
}

export const Budget = ({ summary }: Props) => (
    <Wrapper>
        <Span color={spanColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
            {summary}
        </Span>
        <CustomImg height={imgHeight} src={summaryImg} width={imgWidth} />
    </Wrapper>
);
