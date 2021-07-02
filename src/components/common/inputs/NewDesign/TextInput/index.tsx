import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { useField } from 'effector-forms';
import { Field } from 'effector-forms/dist/types';
import React, { ChangeEvent } from 'react';
import { Disabled, Label, Padding, Placeholder, Type } from 'types';
import { ErrorSpan, LabelNameSpan, TextFieldForm, Wrapper } from './styles';

export interface TextInputProps
    extends Disabled,
        Placeholder,
        Type,
        Label,
        Pick<Padding, 'paddingLeft' | 'paddingRight'> {
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    errorText?: string;
    value?: string | number;
    labelFontSize?: string;
    labelLineHeight?: string;
    labelUppercase?: boolean;
}

export const TextInput = ({
    disabled,
    label,
    name,
    onChange,
    placeholder,
    labelFontSize,
    labelLineHeight,
    labelUppercase,
    required,
    type,
    errorText,
    value = '',
    paddingLeft,
    paddingRight
}: TextInputProps) => (
    <Wrapper>
        <MarginWrapper marginBottom="8px">
            <LabelNameSpan fontSize={labelFontSize} lineHeight={labelLineHeight} uppercase={labelUppercase}>
                {label}
                {required && '*'}
            </LabelNameSpan>
        </MarginWrapper>
        <TextFieldForm
            disabled={disabled}
            name={name}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
        {errorText && (
            <MarginWrapper marginTop="16px">
                <ErrorSpan>{errorText}</ErrorSpan>
            </MarginWrapper>
        )}
    </Wrapper>
);

export interface FormTextInputProps extends Omit<TextInputProps, 'onChange' | 'value' | 'errorText' | 'name'> {
    field: Field<string>;
}

export const FormTextInput = ({ field, ...props }: FormTextInputProps) => {
    const { value, onChange, errorText, name } = useField(field);

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

    return <TextInput errorText={errorText()} name={name} value={value} onChange={onChangeInput} {...props} />;
};
