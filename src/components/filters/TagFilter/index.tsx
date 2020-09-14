import { ClosableTag } from 'components/common/tags/ClosableTag';
import { Span } from 'components/common/TextComponents/Span';
import { Column } from 'components/common/wrappers/FlexWrapper';
import {
    filterMarginRight,
    spanColor,
    spanFontSize,
    spanLineHeight,
    testArray
} from 'components/filters/TagFilter/constants';
import { Wrapper } from 'components/filters/TagFilter/styles';
import React from 'react';
import { Title } from 'types';

interface Props extends Title {}

export const TagFilter = ({ title = 'Filter' }: Props) => (
    <>
        <Column marginRight={filterMarginRight}>
            <Span noWrap color={spanColor} fontSize={spanFontSize} lineHeight={spanLineHeight}>
                {title}
            </Span>
        </Column>
        <Wrapper>
            {testArray.map(i => (
                <ClosableTag key={i} closable marginRight="26px">
                    {i}
                </ClosableTag>
            ))}
        </Wrapper>
    </>
);
