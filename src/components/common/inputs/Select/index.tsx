import arrowImg from 'assets/icons/arrow-down-v2.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import {
    imgHeight,
    imgWidth,
    ulWrapperTop,
    wrapperHeight,
    wrapperImgRight
} from 'components/common/inputs/Select/constants';
import { SelectLi, SelectUl, Wrapper } from 'components/common/inputs/Select/styles';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { clickableWrapperDiameter } from 'components/grid/wrappers/ClicableWrapper/constants';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { defaultFontSize } from 'constants/defaults';
import { Noop } from 'constants/global';
import React, { FC, useState } from 'react';
import {
    Active,
    AdditionalTitle,
    Disabled,
    IsWithoutBorder,
    ItemRadioProperties,
    PaddingRight,
    RadioProperties,
    Sizes
} from 'types';
import { multiplyPixels, pixelsAddition } from 'utils/parsers';

interface ItemTextProperties {
    itemFontSize?: string;
    itemFontWeight?: string;
}

interface WrapperProps
    extends RadioProperties,
        Sizes,
        AdditionalTitle,
        IsWithoutBorder,
        PaddingRight,
        Disabled,
        ItemTextProperties {
    top?: boolean;
    isDarkStyle?: boolean;
}

interface ItemSpanProps extends AdditionalTitle, ItemTextProperties {}

interface Props extends Active, ItemRadioProperties, ItemTextProperties {}

const ItemSpan: FC<ItemSpanProps> = ({ children, additionalTitle, itemFontSize, itemFontWeight }) => (
    <>
        <Span fontSize={itemFontSize || defaultFontSize} fontWeight={itemFontWeight || '500'} lineHeight="17px">
            {children}
        </Span>
        {additionalTitle && (
            <MarginWrapper marginLeft="5px">
                <Span
                    fontSize={itemFontSize || '13px'}
                    fontWeight={itemFontWeight || '500'}
                    lineHeight="20px"
                    opacity={0.5}
                >
                    {additionalTitle}
                </Span>
            </MarginWrapper>
        )}
    </>
);

const Item = ({ active, value, data = value, onClick, itemFontSize, itemFontWeight }: Props) => (
    <SelectLi active={active} onClick={() => onClick(value)}>
        <ItemSpan itemFontSize={itemFontSize} itemFontWeight={itemFontWeight}>
            {data}
        </ItemSpan>
    </SelectLi>
);

export const Select = ({
    values,
    additionalTitle,
    defaultActive = values[0],
    data = values,
    onChange = Noop,
    top,
    disabled,
    height = wrapperHeight,
    isDarkStyle,
    itemFontSize,
    itemFontWeight,
    ...styles
}: WrapperProps) => {
    const [isClosed, setIsClosed] = useState(true);
    const [selected, setSelected] = useState(defaultActive);
    const [radio, setRadio] = useState(
        values.map(i => ({
            value: i,
            active: i === defaultActive ? true : false
        }))
    );

    const onClose = () => !disabled && setIsClosed(!isClosed);

    const onClick = (value: string) => {
        setRadio(
            radio.map(i => ({
                ...i,
                active: i.value === value
            }))
        );
        setSelected(value);
        onChange(value);
        onClose();
    };

    const arrowTop = parseInt(height) / 2 - parseInt(clickableWrapperDiameter) / 2 + 'px';

    const selectTop = top
        ? '-' + pixelsAddition('10px', multiplyPixels(wrapperHeight, radio.length))
        : parseInt(ulWrapperTop) + parseInt(height) / 2 + 'px';

    return (
        <Wrapper disabled={disabled} height={height} isDarkStyle={isDarkStyle} onClick={onClose} {...styles}>
            <ItemSpan additionalTitle={additionalTitle} itemFontSize={itemFontSize} itemFontWeight={itemFontWeight}>
                {selected}
            </ItemSpan>
            <AbsoluteWrapper right={wrapperImgRight} top={arrowTop}>
                <ClickableWrapper width="20px">
                    <CustomImg pointer height={imgHeight} rotate={isClosed ? 0 : 180} src={arrowImg} width={imgWidth} />
                </ClickableWrapper>
            </AbsoluteWrapper>
            <AbsoluteWrapper isClosed={isClosed} left="0" top={selectTop} width="100%" zIndex="5">
                <SelectUl>
                    {radio.map((item, i) => (
                        <Item
                            key={item.value}
                            active={item.active}
                            data={data[i]}
                            itemFontSize={itemFontSize}
                            itemFontWeight={itemFontWeight}
                            value={item.value}
                            onClick={onClick}
                        />
                    ))}
                </SelectUl>
            </AbsoluteWrapper>
        </Wrapper>
    );
};
