import errorImg from 'assets/img/error.svg';
import successImg from 'assets/img/success.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { TextInput as StyledInput } from 'components/common/inputs/Input';
import { Span } from 'components/common/typography/Span';
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
} from 'components/FormComponents/inputs/TextInput/constants';
import { InputWrapper, Wrapper } from 'components/FormComponents/inputs/TextInput/styles';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { requiredFieldMessage } from 'constants/messages';
import { errorColor, successColor, untouchedColor } from 'constants/styles';
import { useField } from 'formik';
import React, { ChangeEvent } from 'react';
import { Disabled, Placeholder, Type } from 'types';

// interface Props extends TextFormInput {
//     value: string;
//     onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
//     onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
//     touched?: boolean;
// }

interface Props extends Disabled, Placeholder, Type {
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

// interface Props extends FieldHookConfig<string>, Disabled, Type, Label {}

export const TextInputOldVersion =
    // ({
    //     error,
    //     // defaultValue = '',
    //     value,
    //     onChange = noop,
    //     label,
    //     name,
    //     type = name,
    //     disabled = false,
    //     onBlur = noop,
    //     touched = false
    // }: Props) =>
    // ({ placeholder = 'Email', disabled, ...props }: FieldHookConfig<string>) => {
    ({ placeholder = 'Email', disabled, type = 'text', name, onChange }: Props) => {
        const [field, { error, touched }] = useField(name);

        const onInputChange = onChange || field.onChange;

        //console.log(field.onChange, field.name);

        // const context = useFormikContext();
        // console.log(context);

        return (
            <Wrapper>
                <Row marginBottom={labelMarginBottom}>
                    <Span
                        color={disabled ? disabledColor : !touched ? untouchedColor : error ? errorColor : successColor}
                        fontSize={labelFontSize}
                        fontWeight={labelFontWeight}
                        lineHeight={labelLineHeight}
                    >
                        {placeholder}
                    </Span>
                </Row>
                {/* <Label error={!!error}>{label}</Label> */}
                <InputWrapper disabled={disabled} error={!!error} success={!disabled && !error} touched={touched}>
                    <StyledInput
                        background={disabled ? disabledColor : inputBackground}
                        disabled={disabled}
                        {...field}
                        type={type}
                        width="100%"
                        onChange={onInputChange}
                    />
                    {touched && !disabled && (
                        <AbsoluteWrapper right={absoluteIconRight} top={absoluteIconTop}>
                            <CustomImg height={iconDiameter} src={error ? errorImg : successImg} width={iconDiameter} />
                        </AbsoluteWrapper>
                    )}
                </InputWrapper>
                <Row alignCenter height={errorSpanHeight} marginBottom={errorSpanMarginBottom}>
                    <Span
                        color={!touched ? untouchedColor : errorColor}
                        fontSize={labelFontSize}
                        fontWeight={labelFontWeight}
                        lineHeight={labelLineHeight}
                    >
                        {!touched ? requiredFieldMessage : error}
                    </Span>
                </Row>
                {/* {<ErrorSpan>{error}</ErrorSpan>} */}
            </Wrapper>
        );
    };
