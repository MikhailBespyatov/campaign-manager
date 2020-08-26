import { ErrorSpan, Input as StyledInput, InputWrapper, Label, Wrapper } from 'components/FormComponents/Input/styles';
import React, { ChangeEvent } from 'react';

interface Props {
    error: string;
    value: string;
    onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
    label: string;
    name: string;
    type?: string;
}

export const Input = ({ error, value, onChange, label, name, type = name }: Props) => (
    <Wrapper>
        <Label error={!!error}>{label}</Label>
        <InputWrapper>
            <StyledInput name={name} type={type} value={value} onChange={onChange} />
        </InputWrapper>
        {<ErrorSpan>{error}</ErrorSpan>}
    </Wrapper>
);
