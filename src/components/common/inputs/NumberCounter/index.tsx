import decrementImg from 'assets/img/decrement.svg';
import incrementImg from 'assets/img/increment.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
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
} from 'components/common/inputs/NumberCounter/constants';
import { Wrapper } from 'components/common/inputs/NumberCounter/styles';
import { noop } from 'constants/global';
import React, { ChangeEvent, useState } from 'react';
import { BorderRadiusProperties, NumberInput as INumberInput, numberOrEmptyString } from 'types';

interface Props extends INumberInput, BorderRadiusProperties {}

export const NumberCounter = ({
    defaultValue = 0,
    onChange = noop,
    min = 0,
    max = 10,
    step = 1,
    ...borderRadiusProperties
}: Props) => {
    const [value, setValue] = useState<numberOrEmptyString>(defaultValue);

    const increment = () => setValue(value === '' ? 1 : value + 1);
    const decrement = () => setValue(value < 1 || value === '' ? 0 : value - 1);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        value !== '' ? setValue(Number(value)) : setValue(value);
        onChange(value === '' ? 0 : Number(value));
    };

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
