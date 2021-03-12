import React from 'react';
import emptySearchLayout from 'assets/img/empty_search_layout.svg';
import emptySearchIcon from 'assets/icons/empty_search_icon.svg';
import sorryIcon from 'assets/img/sorry_icon.svg';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper';
import { EmptySearchResultWrapper } from './styles';
import { Title } from 'types';
import { Span } from 'components/common/typography/Span';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Row } from 'components/grid/wrappers/FlexWrapper';

const EmptySearchIcon = () => (
    <RelativeWrapper>
        <CustomImg src={emptySearchLayout} />
        <AbsoluteWrapper bottom="-8px" right="10px">
            <CustomImg height="80px" src={emptySearchIcon} />
        </AbsoluteWrapper>
    </RelativeWrapper>
);

export interface EmptySearchResultProps extends Pick<Title, 'title'> {}

export const EmptySearchResult = ({ title }: EmptySearchResultProps) => (
    <EmptySearchResultWrapper alignCenter justifyCenter>
        <RelativeWrapper height="160px" width="240px">
            <AbsoluteWrapper left="-50px">
                <EmptySearchIcon />
            </AbsoluteWrapper>
        </RelativeWrapper>
        {title && (
            <Row alignCenter marginTop="64px">
                <Span alignCenter fontSize="16px" fontWeight="400" lineHeight="22px">
                    {title}
                </Span>
                <MarginWrapper marginLeft="7px">
                    <CustomImg src={sorryIcon} width="24px" />
                </MarginWrapper>
            </Row>
        )}
    </EmptySearchResultWrapper>
);
