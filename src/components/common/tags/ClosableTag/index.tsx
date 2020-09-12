import closableTagImg from 'assets/img/close.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import {
    imgHeight,
    imgWidth,
    intermediatePadding,
    spanFontSize,
    spanFontWeight,
    spanLineHeight,
    tagColor
} from 'components/common/tags/ClosableTag/constants';
import { Wrapper } from 'components/common/tags/ClosableTag/styles';
import { Span } from 'components/common/TextComponents/Span';
import { Column } from 'components/common/wrappers/FlexWrapper';
import { hashTagPrefix } from 'constants/styles';
import React, { FC } from 'react';
import { BorderRadiusProperties, Closable, MarginRightBottom, WithHashtag } from 'types';

interface Props extends Closable, WithHashtag, MarginRightBottom, BorderRadiusProperties {}

export const ClosableTag: FC<Props> = ({ children, onClose, closable, hashtag, ...rest }) => (
    <Wrapper {...rest}>
        <Column marginRight={closable ? intermediatePadding : '0'}>
            <Span color={tagColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={spanLineHeight}>
                {hashtag && hashTagPrefix}
                {children}
            </Span>
        </Column>
        {closable && <CustomImg pointer height={imgHeight} src={closableTagImg} width={imgWidth} onClick={onClose} />}
    </Wrapper>
);
