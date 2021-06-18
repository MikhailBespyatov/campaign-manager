import arrowImg from 'assets/icons/arrow-down-v2.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import {
    ulWrapperTop,
    wrapperHeight,
    wrapperImgRight,
    wrapperImgTop
} from 'components/common/inputs/HistoricalSetSelect/constants';
import { SelectLi, SelectUl, Wrapper } from 'components/common/inputs/HistoricalSetSelect/styles';
import { imgHeight, imgWidth } from 'components/common/tags/ClosableTag/constants';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { defaultFontSize } from 'constants/defaults';
import { Noop } from 'constants/global';
import { primaryColor, white } from 'constants/styles';
import React, { FC, useState } from 'react';
import {
    Active,
    AdditionalTitle,
    Color,
    IsWithoutBorder,
    ItemRadioProperties,
    PaddingRight,
    RadioProperties,
    Sizes
} from 'types';
import { multiplyPixels, pixelsAddition } from 'utils/parsers';

interface WrapperProps extends RadioProperties, Sizes, AdditionalTitle, IsWithoutBorder, PaddingRight {
    top?: boolean;
}

interface ItemSpanProps extends AdditionalTitle, Color {}

interface Props extends Active, ItemRadioProperties {}

const ItemSpan: FC<ItemSpanProps> = ({ children, color, additionalTitle }) => (
    <>
        <MarginWrapper marginLeft="16px">
            <Span color={color} fontSize={defaultFontSize} fontWeight="400" lineHeight="17px">
                {children}
            </Span>
        </MarginWrapper>
        {additionalTitle && (
            <MarginWrapper marginLeft="5px">
                <Span fontSize="13px" fontWeight="500" lineHeight="20px" opacity={0.5}>
                    {additionalTitle}
                </Span>
            </MarginWrapper>
        )}
    </>
);

const Item = ({ active, value, data = value, onClick }: Props) => (
    <SelectLi active={active} onClick={() => onClick(value)}>
        <ItemSpan color={active ? white : primaryColor}>{data}</ItemSpan>
    </SelectLi>
);

export const HistoricalSetSelect = ({
    values,
    additionalTitle,
    defaultActive = values[0],
    data = values,
    onChange = Noop,
    top,
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

    const onClose = () => setIsClosed(!isClosed);

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

    return (
        <Wrapper {...styles}>
            <ItemSpan additionalTitle={additionalTitle}>{selected}</ItemSpan>
            <AbsoluteWrapper right={wrapperImgRight} top={wrapperImgTop}>
                <ClickableWrapper height="22px" onClick={onClose}>
                    <CustomImg pointer height={imgHeight} rotate={isClosed ? 0 : 180} src={arrowImg} width={imgWidth} />
                </ClickableWrapper>
            </AbsoluteWrapper>
            <AbsoluteWrapper
                isClosed={isClosed}
                left="0"
                top={top ? '-' + pixelsAddition('10px', multiplyPixels(wrapperHeight, radio.length)) : ulWrapperTop}
                width="100%"
                zIndex="2"
            >
                <SelectUl>
                    {radio.map((item, i) => (
                        <Item
                            key={item.value}
                            active={item.active}
                            data={data[i]}
                            value={item.value}
                            onClick={onClick}
                        />
                    ))}
                </SelectUl>
            </AbsoluteWrapper>
        </Wrapper>
    );
};
