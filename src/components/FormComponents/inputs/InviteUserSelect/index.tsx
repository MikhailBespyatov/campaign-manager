import arrowImg from 'assets/img/expandImg.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { HiddenInput } from 'components/common/inputs/Input';
import { Span } from 'components/common/typography/Span';
import { wrapperBorderColor } from 'components/filters/TagFilter/constants';
import {
    imgHeight,
    imgWidth,
    ulWrapperTop,
    wrapperImgRight,
    wrapperImgTop
} from 'components/FormComponents/inputs/InviteUserSelect/constants';
import { SelectLi, SelectUl, Wrapper } from 'components/FormComponents/inputs/InviteUserSelect/styles';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { errorColor } from 'constants/styles';
import { useField } from 'formik';
import React, { FC, MouseEvent, useState } from 'react';
import { Active, Name } from 'types';

interface WrapperProps extends Name {
    values: string[];
    data: string[];
    defaultActive?: number;
    //onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface Props extends Active {
    index: number;
    data: string;
    onClick: (index: number) => void;
}

const ItemSpan: FC = ({ children }) => (
    <Span fontSize="12px" fontWeight="400" lineHeight="22px">
        {children}
    </Span>
);

const Item = ({ active, index, data, onClick }: Props) => (
    <SelectLi active={active} onClick={() => onClick(index)}>
        <ItemSpan>{data}</ItemSpan>
    </SelectLi>
);

export const InviteUserSelect = ({ name = '', values, defaultActive = 0, data = values }: WrapperProps) => {
    const [field, { error, touched }, { setValue }] = useField(name);

    const [isClosed, setIsClosed] = useState(true);
    const [selected, setSelected] = useState(values[defaultActive]);
    const [selectedData, setSelectedData] = useState(data[defaultActive]);
    const [radio, setRadio] = useState(
        values.map(i => ({
            value: i,
            active: i === values[defaultActive] ? true : false
        }))
    );

    const onClose = () => setIsClosed(!isClosed);
    const onClickClose = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        setIsClosed(!isClosed);
    };

    const onClick = (index: number) => {
        setRadio(
            radio.map((item, i) => ({
                ...item,
                active: index === i
            }))
        );
        setSelected(values[index]);
        setValue(values[index]);
        setSelectedData(data[index]);
        onClose();
    };

    return (
        <Wrapper color={!touched ? wrapperBorderColor : error ? errorColor : wrapperBorderColor}>
            <ItemSpan>{selectedData}</ItemSpan>
            <HiddenInput {...field} value={selected} />
            <AbsoluteWrapper right={wrapperImgRight} top={wrapperImgTop}>
                <ClickableWrapper onClick={onClickClose}>
                    <CustomImg
                        pointer
                        height={imgHeight}
                        rotate={isClosed ? 90 : -90}
                        src={arrowImg}
                        width={imgWidth}
                    />
                </ClickableWrapper>
            </AbsoluteWrapper>
            <AbsoluteWrapper isClosed={isClosed} left="0" top={ulWrapperTop} width="100%" zIndex="2">
                <SelectUl>
                    {radio.map((item, i) => (
                        <Item key={item.value} active={item.active} data={data[i]} index={i} onClick={onClick} />
                    ))}
                </SelectUl>
            </AbsoluteWrapper>
        </Wrapper>
    );
};
