import arrowDown from 'assets/icons/arrow_down.svg';
import { arrowHeight, arrowWidth } from 'components/common/buttons/SortSelectorButton/constants';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { OpacityActiveEffect } from 'components/dynamic/effects/styles';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import React from 'react';
import { Active, MarginRightBottom, Noop, SortType } from 'types';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { ButtonSpan } from 'components/common/buttons/SortSelectorButton/styles';

export interface Props extends MarginRightBottom, Active {
    onChange?: Noop;
    state: SortType;
    children: string;
}

export const SortSelectorButton = ({ onChange, children, state }: Props) => (
    <ClickableWrapper width="100%" onClick={onChange}>
        <Row alignCenter noWrap>
            <Column alignCenter>
                <OpacityActiveEffect active={state === 'ascending'}>
                    <CustomImg alt="Arrow up" height={arrowHeight} rotate={180} src={arrowDown} width={arrowWidth} />
                </OpacityActiveEffect>

                <OpacityActiveEffect active={state === 'descending'}>
                    <CustomImg alt="Arrow down" height={arrowHeight} src={arrowDown} width={arrowWidth} />
                </OpacityActiveEffect>
            </Column>
            <MarginWrapper marginLeft="5px">
                <ButtonSpan>{children}</ButtonSpan>
            </MarginWrapper>
        </Row>
    </ClickableWrapper>
);
