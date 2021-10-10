import selector_arrow from 'assets/icons/selector_arrow.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import {
    columnTypeSelectorWrapperWidth,
    getArrowLeft,
    getItemsWrapperTop,
    getTitleSpanWidth,
    listTypeSelectorWrapperWidth,
    selectorItemHeight,
    selectorItemMarginBottom,
    selectorItemWidth,
    selectorItemWrapperPadding
} from 'components/common/inputs/SelectorFilter/constants';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, FlexGrow, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { RelativeWrapper } from 'components/grid/wrappers/RelativeWrapper';
import { Noop } from 'constants/global';
import { useCloseClick } from 'hooks/closeClick';
import { useRefWidthAndHeight } from 'hooks/getRefProperty';
import { useModal } from 'hooks/modal';
import React, { useEffect, useRef, useState } from 'react';
import { BooleanCheckbox, OnStringChange, RadioProperties, SelectorFilterType, Sizes, Title } from 'types';
import { BooleanCircleCheckbox } from '../BooleanCircleCheckbox';
import { ItemsWrapper, SelectorBorderWrapper, SelectorItemSpan, SelectorWrapper, TitleSpan } from './styles';

interface SelectorItemProps extends Omit<Partial<BooleanCheckbox>, 'onChange'>, Required<OnStringChange> {
    children: string;
}

const SelectorItem = ({ children, onChange, defaultChecked = false, ...checkboxProps }: SelectorItemProps) => {
    const [checked, setChecked] = useState(defaultChecked);

    const onClickItem = () => onChange(children);

    useEffect(() => setChecked(defaultChecked), [defaultChecked]);

    return (
        <SelectorBorderWrapper
            hovered
            pointer
            height={selectorItemHeight}
            padding="0 8px"
            width={selectorItemWidth}
            onClick={onClickItem}
        >
            <Section alignCenter height="100%">
                <MarginWrapper marginRight="8px">
                    <BooleanCircleCheckbox defaultChecked={checked} onChange={setChecked} {...checkboxProps} />
                </MarginWrapper>
                <SelectorItemSpan>{children}</SelectorItemSpan>
            </Section>
        </SelectorBorderWrapper>
    );
};

interface ValuesListProps {
    values: string[];
    checkedValues?: string[];
    type: 'select' | 'checkbox';
    close: () => void;
    onChange: (active: string) => void;
}

const ValuesList = ({ values, checkedValues, type, onChange, close }: ValuesListProps) => (
    <Column justifyBetween>
        {values.map(value => (
            <MarginWrapper
                key={value}
                marginBottom={selectorItemMarginBottom}
                onClick={type === 'select' ? close : Noop}
            >
                <SelectorItem defaultChecked={checkedValues?.includes(value)} onChange={onChange}>
                    {value}
                </SelectorItem>
            </MarginWrapper>
        ))}
    </Column>
);

export interface SelectorFilterProps
    extends Sizes,
        Omit<RadioProperties, 'data' | 'defaultActive'>,
        Pick<Title, 'title'>,
        SelectorFilterType {
    view?: 'list' | 'columns';
    checkedValues?: string[];
}

export const SelectorFilter = ({
    type = 'select',
    view = 'list',
    values,
    onChange = Noop,
    title,
    checkedValues = [],
    height,
    width
}: SelectorFilterProps) => {
    const { visible, open, close } = useModal();
    const firstColumnLength = Math.round(values.length / 2);
    const firstColumnValues = values.slice(0, firstColumnLength);
    const secondColumnValues = values.slice(firstColumnLength);

    const selectorRef = useRef<HTMLDivElement>(null);
    const [selectorWidth, selectorHeight] = useRefWidthAndHeight(selectorRef);

    const itemsWrapperTop = getItemsWrapperTop(selectorHeight);
    const arrowLeft = getArrowLeft(selectorWidth);

    const openClick = () => (visible ? close() : open());

    useCloseClick(selectorRef, close);

    return (
        <RelativeWrapper ref={selectorRef} height={height} width={width}>
            <SelectorWrapper onClick={openClick}>
                <Section alignCenter justifyBetween noWrap height="100%">
                    <Row noWrap marginRight="8px" width={getTitleSpanWidth(selectorWidth)}>
                        <TitleSpan ellipsis>{checkedValues[0] || title}</TitleSpan>
                        <FlexGrow>
                            <TitleSpan>{checkedValues?.length > 1 && `+ ${checkedValues?.length - 1}`}</TitleSpan>
                        </FlexGrow>
                    </Row>
                    <FlexGrow flexGrow="0" flexShrink="0">
                        <CustomImg height="5px" src={selector_arrow} width="9px" />
                    </FlexGrow>
                </Section>
            </SelectorWrapper>
            {visible && (
                <AbsoluteWrapper left="0" top={itemsWrapperTop} zIndex="100">
                    <ItemsWrapper
                        left={arrowLeft}
                        padding={selectorItemWrapperPadding}
                        width={view === 'columns' ? columnTypeSelectorWrapperWidth : listTypeSelectorWrapperWidth}
                    >
                        <Section justifyAround>
                            <ValuesList
                                checkedValues={checkedValues}
                                close={close}
                                type={type}
                                values={firstColumnValues}
                                onChange={onChange}
                            />

                            <ValuesList
                                checkedValues={checkedValues}
                                close={close}
                                type={type}
                                values={secondColumnValues}
                                onChange={onChange}
                            />
                        </Section>
                    </ItemsWrapper>
                </AbsoluteWrapper>
            )}
        </RelativeWrapper>
    );
};
