import arrowImg from 'assets/img/select_arrow.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { ulWrapperTop, wrapperImgRight, wrapperImgTop } from 'components/common/inputs/Select/constants';
import { SelectLi, SelectUl, Wrapper } from 'components/common/inputs/Select/styles';
import { imgHeight, imgWidth } from 'components/common/tags/ClosableTag/constants';
import { Span } from 'components/common/typography/Span';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { noop } from 'constants/global';
import React, { FC, useState } from 'react';
import { Active, ItemRadioProperties, RadioProperties, Sizes } from 'types';

interface WrapperProps extends RadioProperties, Sizes {}

interface Props extends Active, ItemRadioProperties {}

const ItemSpan: FC = ({ children }) => (
    <Span fontSize="18px" lineHeight="22px">
        {children}
    </Span>
);

const Item = ({ active, value, data = value, onClick }: Props) => (
    <SelectLi active={active} onClick={() => onClick(value)}>
        <ItemSpan>{data}</ItemSpan>
    </SelectLi>
);

export const Select = ({
    values,
    defaultActive = values[0],
    data = values,
    onChange = noop,
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
            <ItemSpan>{selected}</ItemSpan>
            <AbsoluteWrapper right={wrapperImgRight} top={wrapperImgTop}>
                <ClickableWrapper onClick={onClose}>
                    <CustomImg pointer height={imgHeight} rotate={isClosed ? 180 : 0} src={arrowImg} width={imgWidth} />
                </ClickableWrapper>
            </AbsoluteWrapper>
            <AbsoluteWrapper isClosed={isClosed} left="0" top={ulWrapperTop} width="100%" zIndex="2">
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
