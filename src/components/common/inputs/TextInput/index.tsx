import errorImg from 'assets/img/error.svg';
import successImg from 'assets/img/success.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { TextInput as StyledInput } from 'components/common/inputs/Input';
import {
    absoluteIconRight,
    absoluteIconTop,
    disabledColor,
    errorSpanHeight,
    errorSpanMarginBottom,
    iconDiameter,
    inputBackground,
    labelFontSize,
    labelFontWeight,
    labelLineHeight,
    labelMarginBottom
} from 'components/common/inputs/TextInput/constants';
import { InputWrapper, Wrapper } from 'components/common/inputs/TextInput/styles';
import { Span } from 'components/common/TextComponents/Span';
import { AbsoluteWrapper } from 'components/common/wrappers/AbsoluteWrapper';
import { Row } from 'components/common/wrappers/FlexWrapper';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextInput as TextInputProps } from 'types';
import { defaultAlt, errorColor, noop, successColor } from '../../../../constants';

interface Props extends TextInputProps {}

export const TextInput = ({
    error,
    defaultValue = '',
    onChange = noop,

    label,
    name,
    type = name,
    disabled = false
}: Props) => {
    const [value, setValue] = useState(defaultValue);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    useEffect(() => {
        onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <Wrapper>
            <Row marginBottom={labelMarginBottom}>
                <Span
                    color={disabled ? disabledColor : error ? errorColor : successColor}
                    fontSize={labelFontSize}
                    fontWeight={labelFontWeight}
                    lineHeight={labelLineHeight}
                >
                    {label}
                </Span>
            </Row>
            {/* <Label error={!!error}>{label}</Label> */}
            <InputWrapper disabled={disabled} error={!!error} success={!disabled && !error}>
                <StyledInput
                    background={disabled ? disabledColor : inputBackground}
                    disabled={disabled}
                    name={name}
                    type={type}
                    value={value}
                    width="100%"
                    onChange={inputChange}
                />
                {!disabled && (
                    <AbsoluteWrapper right={absoluteIconRight} top={absoluteIconTop}>
                        <CustomImg
                            alt={defaultAlt}
                            height={iconDiameter}
                            src={error ? errorImg : successImg}
                            width={iconDiameter}
                        />
                    </AbsoluteWrapper>
                )}
            </InputWrapper>
            <Row alignCenter height={errorSpanHeight} marginBottom={errorSpanMarginBottom}>
                <Span
                    color={errorColor}
                    fontSize={labelFontSize}
                    fontWeight={labelFontWeight}
                    lineHeight={labelLineHeight}
                >
                    {error}
                </Span>
            </Row>
            {/* {<ErrorSpan>{error}</ErrorSpan>} */}
        </Wrapper>
    );
};
