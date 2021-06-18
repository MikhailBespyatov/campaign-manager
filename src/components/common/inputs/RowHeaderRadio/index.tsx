import { PercentageGrowth } from 'components/common/features/PercentageGrowth';
import { inactiveColor } from 'components/common/inputs/RowHeaderRadio/constants';
import { Radio } from 'components/common/inputs/RowHeaderRadio/styles';
import { RowHeaderRadioType } from 'components/common/inputs/RowHeaderRadio/types';
import { Span } from 'components/common/typography/Span';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { defaultFontSize, defaultFontWeight } from 'constants/defaults';
import { Noop } from 'constants/global';
import { primaryMargin, secondaryMargin } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { useState } from 'react';
import { themeStores } from 'stores/theme';
import { RadioProperties } from 'types';

interface Props extends Omit<RadioProperties, 'values'> {
    values: RowHeaderRadioType[];
}

export const RowHeaderRadio = ({ values, defaultActive = values[0].title, onChange = Noop }: Props) => {
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
        <Section>
            {radio.map((item, i) => (
                <MarginWrapper key={item.value} marginBottom={secondaryMargin} marginRight={primaryMargin}>
                    <Radio active={item.active} onClick={() => onClick(item.value)}>
                        <Column alignCenter>
                            <Row marginBottom="14px">
                                <Span
                                    color={item.active ? statisticActiveTextColor : statisticInactiveTextColor}
                                    fontSize="24px"
                                    fontWeight={defaultFontWeight}
                                >
                                    {values[i].quantity}
                                </Span>
                            </Row>
                            <Row marginBottom={secondaryMargin}>
                                <Span
                                    color={item.active ? statisticActiveTextColor : inactiveColor}
                                    fontSize={defaultFontSize}
                                    fontWeight="400"
                                    lineHeight="19px"
                                >
                                    {item.value}
                                </Span>
                            </Row>
                            {/*<Row alignCenter marginBottom="10px">*/}
                            {/*    {values[i].inBrackets && (*/}
                            {/*        <Span*/}
                            {/*            color={item.active ? primaryTextColor : inactiveColor}*/}
                            {/*            fontSize={defaultFontSize}*/}
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
                </MarginWrapper>
            ))}
        </Section>
    );
};
