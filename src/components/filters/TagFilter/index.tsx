import { ClosableTag } from 'components/common/tags/ClosableTag';
import { P } from 'components/common/typography/titles/P';
import { filterMarginRight, testArray } from 'components/filters/TagFilter/constants';
import { Wrapper } from 'components/filters/TagFilter/styles';
import { Column } from 'components/grid/wrappers/FlexWrapper';
import React from 'react';
import { Title } from 'types';

interface Props extends Title {}

export const TagFilter = ({ title = 'Filter' }: Props) => (
    <>
        <Column marginRight={filterMarginRight}>
            <P opacity={0.4}>{title}</P>
        </Column>
        <Wrapper>
            {testArray.map(i => (
                <ClosableTag key={i} closable marginBottom="0">
                    {i}
                </ClosableTag>
            ))}
        </Wrapper>
    </>
);
