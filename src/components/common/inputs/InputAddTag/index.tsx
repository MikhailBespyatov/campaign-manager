import addTagImg from 'assets/img/add_tag.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
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
    inputMinWidth,
    right,
    top
} from 'components/common/inputs/InputAddTag/constants';
import { Wrapper } from 'components/common/inputs/InputAddTag/styles';
import { AbsoluteWrapper } from 'components/common/wrappers/AbsoluteWrapper';
import React, { ChangeEvent, FC, useState } from 'react';
import { Placeholder } from 'types';
import { noop } from '../../../../constants';

interface Props extends Placeholder {
    onClick?: (value: string) => void;
    defaultValue?: string;
}

export const InputAddTag: FC<Props> = ({ defaultValue = '', onClick = noop, placeholder = 'Enter tags' }) => {
    const [value, setValue] = useState(defaultValue);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const handleClick = () => onClick(value);

    return (
        <Wrapper>
            <TextInput
                alignTextCenter
                background={inputBackground}
                color={inputColor}
                fontSize={inputFontSize}
                fontWeight={inputFontWeight}
                height={inputHeight}
                lineHeight={inputLineHeight}
                placeholder={placeholder}
                width={inputMinWidth}
                onChange={inputChange}
            />
            <AbsoluteWrapper right={right} top={top} onClick={handleClick}>
                <CustomImg pointer height={imgHeight} src={addTagImg} width={imgWidth} />
            </AbsoluteWrapper>
        </Wrapper>
    );
};