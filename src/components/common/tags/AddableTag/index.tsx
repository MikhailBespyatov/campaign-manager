import closableTagImg from 'assets/img/close.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { imgHeight, imgWidth, intermediatePadding } from 'components/common/tags/AddableTag/constants';
import { ClosableTagSpan, Wrapper } from 'components/common/tags/AddableTag/styles';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import { hashTagPrefix } from 'constants/styles';
import React, { FC } from 'react';
import { MarginRightBottom, NoopClick, WithHashtag } from 'types';

interface Props extends NoopClick, WithHashtag, MarginRightBottom {}

export const AddableTag: FC<Props> = ({ children, onClick, hashtag, ...marginRightBottom }) => (
    <Wrapper {...marginRightBottom}>
        <Column marginRight={intermediatePadding}>
            <ClosableTagSpan>
                {hashtag && hashTagPrefix}
                {children}
            </ClosableTagSpan>
        </Column>
        <CustomImg pointer height={imgHeight} rotate={45} src={closableTagImg} width={imgWidth} onClick={onClick} />
    </Wrapper>
);
