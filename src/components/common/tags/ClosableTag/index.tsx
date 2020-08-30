import closableTagImg from 'assets/img/close.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import {
    imgHeight,
    imgWidth,
    spanFontSize,
    spanFontWeight,
    spanLineHeight,
    tagColor
} from 'components/common/tags/ClosableTag/constants';
import { Wrapper } from 'components/common/tags/ClosableTag/styles';
import { Span } from 'components/common/TextComponents/Span';
import React, { FC } from 'react';
import { Closable } from 'types';
import { hashTagPrefix } from '../../../../constants';

interface Props extends Closable {}

export const ClosableTag: FC<Props> = ({ children, onClose, closable }) => (
    <Wrapper>
        <Span color={tagColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
            {hashTagPrefix}
            {children}
        </Span>
        {closable && <CustomImg pointer height={imgHeight} src={closableTagImg} width={imgWidth} onClick={onClose} />}
    </Wrapper>
);
