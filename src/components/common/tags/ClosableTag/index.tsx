import closableTagImg from 'assets/img/close_modal.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import {
    imgHeight,
    imgWidth,
    intermediatePadding,
    spanFontSize,
    spanFontWeight,
    tagColor,
    wrapperHeight
} from 'components/common/tags/ClosableTag/constants';
import { Wrapper } from 'components/common/tags/ClosableTag/styles';
import { Span } from 'components/common/typography/Span';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { hashTagPrefix } from 'constants/styles';
import React, { FC } from 'react';
import { BackgroundColor, BorderRadiusProperties, Closable, MarginRightBottom, WithHashtag } from 'types';

interface Props extends Closable, WithHashtag, MarginRightBottom, BorderRadiusProperties, BackgroundColor {}

export const ClosableTag: FC<Props> = ({ children, onClose, closable, hashtag, ...rest }) => (
    <Wrapper {...rest}>
        <Column marginRight={closable ? intermediatePadding : '0'}>
            <Span color={tagColor} fontSize={spanFontSize} fontWeight={spanFontWeight} lineHeight={wrapperHeight}>
                {hashtag && hashTagPrefix}
                {children}
            </Span>
        </Column>
        {closable && <CustomImg pointer height={imgHeight} src={closableTagImg} width={imgWidth} onClick={onClose} />}
    </Wrapper>
);
