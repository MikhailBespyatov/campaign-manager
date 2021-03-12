import searchImg from 'assets/img/search.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { TextInput } from 'components/common/inputs/Input';
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
} from 'components/common/inputs/Search/constants';
import { Wrapper } from 'components/common/inputs/Search/styles';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { Noop } from 'constants/global';
import React, { ChangeEvent, useState } from 'react';
import { DefaultValueString, Placeholder } from 'types';

export interface Props extends Placeholder, DefaultValueString {
    onSearch?: (value: string) => void;
}

export const Search = ({ defaultValue = '', onSearch = Noop, placeholder = 'Find Channels' }: Props) => {
    const [value, setValue] = useState(defaultValue);

    const handleSearch = () => onSearch(value);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <Wrapper>
            <TextInput
                background={inputBackground}
                color={inputColor}
                fontSize={inputFontSize}
                fontWeight={inputFontWeight}
                height={inputHeight}
                lineHeight={inputLineHeight}
                placeholder={placeholder}
                value={value}
                width={inputMinWidth}
                onChange={inputChange}
            />
            <MarginWrapper marginLeft="10px">
                <CustomImg pointer height={imgHeight} src={searchImg} width={imgWidth} onClick={handleSearch} />
            </MarginWrapper>
        </Wrapper>
    );
};
