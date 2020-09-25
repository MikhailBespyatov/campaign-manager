import { NumberCounter } from 'components/common/inputs/NumberCounter';
import { ClosableTag } from 'components/common/tags/ClosableTag';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { noop } from 'constants/global';
import React, { FC } from 'react';
import { MarginRightBottom, NumberInput, WithHashtag } from 'types';

interface Props extends MarginRightBottom, WithHashtag, NumberInput {}

export const CounterTag: FC<Props> = ({
    defaultValue = 0,
    onChange = noop,
    min = 0,
    max = 10,
    step = 1,
    children,
    hashtag,
    ...marginRightBottom
}) => (
    <Row {...marginRightBottom}>
        <ClosableTag borderBottomRightRadius="0" borderTopRightRadius="0" hashtag={hashtag}>
            {children}
        </ClosableTag>
        <NumberCounter
            borderBottomLeftRadius="0"
            borderTopLeftRadius="0"
            defaultValue={defaultValue}
            max={max}
            min={min}
            step={step}
            onChange={onChange}
        />
    </Row>
);
