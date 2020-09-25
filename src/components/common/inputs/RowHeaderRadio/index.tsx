import { PercentageGrowth } from 'components/common/features/PercentageGrowth';
import { inactiveColor } from 'components/common/inputs/RowHeaderRadio/constants';
import { Radio } from 'components/common/inputs/RowHeaderRadio/styles';
import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { noop } from 'constants/global';
import { formGrey3, secondaryColor } from 'constants/styles';
import React, { useState } from 'react';
import { RadioProperties, RowHeaderRadioType } from 'types';

interface Props extends Omit<RadioProperties, 'values'> {
    values: RowHeaderRadioType[];
}

export const RowHeaderRadio = ({ values, defaultActive = values[0].title, onChange = noop }: Props) => {
    const length = values.length;
    const [radio, setRadio] = useState(
        values.map(i => ({
            value: i.title,
            active: i.title === defaultActive ? true : false
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
        <Row marginBottom="0" width="100%">
            {radio.map((item, i) => (
                <Radio key={item.value} active={item.active} quantity={length} onClick={() => onClick(item.value)}>
                    <Column>
                        <Row marginBottom="10px">
                            <Span
                                color={item.active ? secondaryColor : inactiveColor}
                                fontSize="22px"
                                fontWeight="700"
                                lineHeight="28px"
                            >
                                {item.value}
                            </Span>
                        </Row>
                        <Row alignCenter marginBottom="10px">
                            <Span
                                color={item.active ? formGrey3 : inactiveColor}
                                fontSize="14px"
                                fontWeight="normal"
                                lineHeight="22px"
                            >
                                {values[i].quantity}
                            </Span>
                            {values[i].inBrackets && (
                                <Span
                                    color={item.active ? '#0F1642' : inactiveColor}
                                    fontSize="14px"
                                    fontWeight="normal"
                                    lineHeight="17px"
                                    opacity={0.5}
                                >
                                    &#160;{values[i].inBrackets}
                                </Span>
                            )}
                        </Row>
                        <Row marginBottom="0">
                            <PercentageGrowth forcedColor={item.active ? '' : inactiveColor} type={values[i].growType}>
                                {values[i].growNumber}
                            </PercentageGrowth>
                        </Row>
                    </Column>
                </Radio>
            ))}
        </Row>
    );
};
