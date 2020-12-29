import { PercentageGrowth } from 'components/common/features/PercentageGrowth';
import { inactiveColor } from 'components/common/inputs/RowHeaderRadio/constants';
import { Radio } from 'components/common/inputs/RowHeaderRadio/styles';
import { RowHeaderRadioType } from 'components/common/inputs/RowHeaderRadio/types';
import { Span } from 'components/common/typography/Span';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { noop } from 'constants/global';
import React, { useState } from 'react';
import { RadioProperties } from 'types';
import { useStore } from 'effector-react';
import { themeStores } from 'stores/theme';

interface Props extends Omit<RadioProperties, 'values'> {
    values: RowHeaderRadioType[];
}

export const RowHeaderRadio = ({ values, defaultActive = values[0].title, onChange = noop }: Props) => {
    // const length = values.length;
    const [radio, setRadio] = useState(
        values.map(i => ({
            value: i.title,
            active: i.title === defaultActive
        }))
    );

    const { statisticActiveTextColor, statisticInactiveTextColor } = useStore(themeStores.theme);

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
        <Row justifyAround marginBottom="0" width="100%">
            {radio.map((item, i) => (
                <Radio key={item.value} active={item.active} onClick={() => onClick(item.value)}>
                    <Column alignCenter>
                        <Row marginBottom="14px">
                            <Span
                                color={item.active ? statisticActiveTextColor : statisticInactiveTextColor}
                                fontSize="48px"
                                fontWeight="600"
                                lineHeight="59px"
                            >
                                {values[i].quantity}
                            </Span>
                        </Row>
                        <Row marginBottom="8px">
                            <Span
                                color={item.active ? statisticActiveTextColor : inactiveColor}
                                fontSize="16px"
                                fontWeight="400"
                                lineHeight="19.5px"
                            >
                                {item.value}
                            </Span>
                        </Row>
                        {/*<Row alignCenter marginBottom="10px">*/}
                        {/*    {values[i].inBrackets && (*/}
                        {/*        <Span*/}
                        {/*            color={item.active ? primaryTextColor : inactiveColor}*/}
                        {/*            fontSize="14px"*/}
                        {/*            fontWeight="400"*/}
                        {/*            lineHeight="16px"*/}
                        {/*        >*/}
                        {/*            &#160;{values[i].inBrackets}*/}
                        {/*        </Span>*/}
                        {/*    )}*/}
                        {/*</Row>*/}
                        <Row marginBottom="0">
                            {values[i].growType && (
                                <PercentageGrowth
                                    isPlusStyle
                                    // forcedColor={item.active ? primaryTextColor : inactiveColor}
                                    type={values[i].growType}
                                >
                                    {values[i].growNumber}
                                </PercentageGrowth>
                            )}
                        </Row>
                    </Column>
                </Radio>
            ))}
        </Row>
    );
};
