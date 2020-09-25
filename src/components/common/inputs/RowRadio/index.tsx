import { itemActiveColor, spanFontSize, spanLineHeight } from 'components/common/inputs/RowRadio/constants';
import { StyledItem } from 'components/common/inputs/RowRadio/style';
import { Span } from 'components/common/typography/Span';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { noop } from 'constants/global';
import { white } from 'constants/styles';
import React, { useState } from 'react';
import { Active, ItemRadioProperties, RadioProperties } from 'types';

interface WrapperProps extends RadioProperties {}

interface Props extends Active, ItemRadioProperties {}

const Item = ({ active, value, data = value, onClick }: Props) => (
    <StyledItem active={active} onClick={() => onClick(value)}>
        <Span color={active ? white : itemActiveColor} fontSize={spanFontSize} lineHeight={spanLineHeight}>
            {data}
        </Span>
    </StyledItem>
);

export const RowRadio = ({ values, defaultActive = values[0], data = values, onChange = noop }: WrapperProps) => {
    const [radio, setRadio] = useState(
        values.map(i => ({
            value: i,
            active: i === defaultActive ? true : false
        }))
    );

    const onClick = (value: string) => {
        setRadio(
            radio.map(i => ({
                ...i,
                active: i.value === value
            }))
        );
        onChange(value);
    };

    return (
        <Row noWrap marginBottom="0">
            {radio.map((item, i) => (
                <Item key={item.value} active={item.active} data={data[i]} value={item.value} onClick={onClick} />
            ))}
        </Row>
    );
};
