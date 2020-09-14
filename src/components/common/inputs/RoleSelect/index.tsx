import arrowImg from 'assets/img/select_arrow.svg';
import darkArrowImg from 'assets/img/select_arrow_dark.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import {
    imgHeight,
    imgWidth,
    ulWrapperTop,
    wrapperImgRight,
    wrapperImgTop
} from 'components/common/inputs/RoleSelect/constants';
import { SelectLi, SelectUl, Wrapper } from 'components/common/inputs/RoleSelect/styles';
import { Span } from 'components/common/TextComponents/Span';
import { AbsoluteWrapper } from 'components/common/wrappers/AbsoluteWrapper';
import { noop } from 'constants/global';
import React, { FC, useState } from 'react';
import { Active, ItemRadioProperties, RadioProperties, Reverse } from 'types';

interface WrapperProps extends RadioProperties, Reverse {}

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

export const RoleSelect: FC<WrapperProps> = ({
    values,
    defaultActive = values[0],
    data = values,
    onChange = noop,
    reverse
}) => {
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
    };

    return (
        <Wrapper reverse={reverse}>
            <ItemSpan>{selected}</ItemSpan>
            <AbsoluteWrapper right={wrapperImgRight} top={wrapperImgTop}>
                <CustomImg
                    pointer
                    height={imgHeight}
                    rotate={reverse ? (isClosed ? 0 : 180) : isClosed ? 180 : 0}
                    src={reverse ? darkArrowImg : arrowImg}
                    width={imgWidth}
                    onClick={onClose}
                />
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
