import expandTagImg from 'assets/img/expand.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import {
    imgHeight,
    imgWidth,
    right,
    spanColor,
    spanFontSize,
    spanFontWeight,
    spanLineHeight,
    top
} from 'components/common/tags/DropDownMenuTag/constants';
import { Wrapper } from 'components/common/tags/DropDownMenuTag/styles';
import { Span } from 'components/common/TextComponents/Span';
import { AbsoluteWrapper } from 'components/common/wrappers/AbsoluteWrapper';
import React, { FC } from 'react';
import { noop } from 'types';

interface Props {
    onClick?: noop;
}

export const DropDownMenuTag: FC<Props> = ({ children, onClick }) => (
    <Wrapper>
        <Span color={spanColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
            {children}
        </Span>
        <AbsoluteWrapper right={right} top={top} onClick={onClick}>
            <CustomImg pointer height={imgHeight} src={expandTagImg} width={imgWidth} />
        </AbsoluteWrapper>
    </Wrapper>
);
