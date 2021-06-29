import closableTagImg from 'assets/img/close_modal.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { imgHeight, imgWidth, intermediatePadding } from 'components/common/tags/ClosableTag/constants';
import { ClosableTagSpan, Wrapper } from 'components/common/tags/ClosableTag/styles';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { hashTagPrefix } from 'constants/styles';
import React, { FC } from 'react';
import { BackgroundColor, BorderRadiusProperties, Closable, MarginRightBottom, MarginTop, WithHashtag } from 'types';

interface Props extends Closable, WithHashtag, MarginRightBottom, MarginTop, BorderRadiusProperties, BackgroundColor {}

export const ClosableTag: FC<Props> = ({ children, onClose, closable, hashtag, ...rest }) => (
    <Wrapper {...rest}>
        <Column marginRight={closable ? intermediatePadding : '0'}>
            <ClosableTagSpan>
                {hashtag && hashTagPrefix}
                {children}
            </ClosableTagSpan>
        </Column>
        {closable && <CustomImg pointer height={imgHeight} src={closableTagImg} width={imgWidth} onClick={onClose} />}
    </Wrapper>
);
