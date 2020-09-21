import decrementImg from 'assets/img/decrement.svg';
import incrementImg from 'assets/img/increment.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { NumberInput } from 'components/common/inputs/Input';
import {
    imgHeight,
    imgWidth,
    inputBackground,
    inputColor,
    inputFontSize,
    inputFontWeight,
    inputHeight,
    inputLineHeight,
    inputMinWidth
} from 'components/common/inputs/NumberCounterOldVersion/constants';
import { Wrapper } from 'components/common/inputs/NumberCounterOldVersion/styles';
import { noop } from 'constants/global';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { BorderRadiusProperties, NumberInput as INumberInput } from 'types';

interface Props extends INumberInput, BorderRadiusProperties {}

export const NumberCounterOldVersion = ({
    defaultValue = 0,
    onChange = noop,
    min = 0,
    max = 10,
    step = 1,
    ...borderRadiusProperties
}: Props) => {
    const [value, setValue] = useState(defaultValue);

    const increment = () => setValue(value + 1);
    const decrement = () => setValue(value < 1 ? 0 : value - 1);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value));

    useEffect(() => {
        onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <Wrapper {...borderRadiusProperties}>
            <CustomImg pointer height={imgHeight} src={decrementImg} width={imgWidth} onClick={decrement} />
            <NumberInput
                alignTextCenter
                background={inputBackground}
                color={inputColor}
                fontSize={inputFontSize}
                fontWeight={inputFontWeight}
                height={inputHeight}
                lineHeight={inputLineHeight}
                max={max}
                min={min}
                step={step}
                type="number"
                value={value}
                width={inputMinWidth}
                onChange={inputChange}
            />
            <CustomImg pointer height={imgHeight} src={incrementImg} width={imgWidth} onClick={increment} />
        </Wrapper>
    );
};
