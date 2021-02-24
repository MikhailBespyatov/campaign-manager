import arrowImg from 'assets/icons/arrow-down-v2.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { ulWrapperTop, wrapperHeight, wrapperImgRight } from 'components/common/inputs/Select/constants';
import { SelectLi, SelectUl, Wrapper } from 'components/common/inputs/Select/styles';
import { imgHeight, imgWidth } from 'components/common/tags/ClosableTag/constants';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
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
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { clickableWrapperDiameter } from 'components/grid/wrappers/ClicableWrapper/constants';

interface WrapperProps extends RadioProperties, Sizes, AdditionalTitle, IsWithoutBorder, PaddingRight, Disabled {
    top?: boolean;
}

interface ItemSpanProps extends AdditionalTitle {}

interface Props extends Active, ItemRadioProperties {}

const ItemSpan: FC<ItemSpanProps> = ({ children, additionalTitle }) => (
    <>
        <Span fontSize="16px" fontWeight="500" lineHeight="20px">
            {children}
        </Span>
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
        <ItemSpan>{data}</ItemSpan>
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
        <Wrapper disabled={disabled} height={height} {...styles}>
            <ItemSpan additionalTitle={additionalTitle}>{selected}</ItemSpan>
            <AbsoluteWrapper right={wrapperImgRight} top={arrowTop}>
                <ClickableWrapper onClick={onClose}>
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
                            value={item.value}
                            onClick={onClick}
                        />
                    ))}
                </SelectUl>
            </AbsoluteWrapper>
        </Wrapper>
    );
};
