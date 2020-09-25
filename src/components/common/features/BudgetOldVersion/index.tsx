import summaryImg from 'assets/img/summary.svg';
import { Wrapper } from 'components/common/features/Budget/styles';
import {
    imgHeight,
    imgWidth,
    spanFontSize,
    spanFontWeight,
    spanLineHeight,
    summaryColor
} from 'components/common/features/BudgetOldVersion/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { Span } from 'components/common/typography/Span';
import React from 'react';

interface Props {
    summary: string;
}

export const BudgetOldVersion = ({ summary }: Props) => (
    <Wrapper>
        <CustomImg height={imgHeight} src={summaryImg} width={imgWidth} />
        <Span color={summaryColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
            {summary}
        </Span>
    </Wrapper>
);
