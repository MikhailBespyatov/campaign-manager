import {
    ErrorSpan,
    Input as StyledInput,
    InputWrapper,
    Label,
    Wrapper
} from 'components/FormComponents/TextInput/styles';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { TextFormInput } from 'types';
import { noop } from '../../../constants';

interface Props extends TextFormInput {}

export const TextInput = ({ error, defaultValue = '', onChange = noop, label, name, type = name }: Props) => {
    const [value, setValue] = useState(defaultValue);

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    useEffect(() => {
        onChange(value);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <Wrapper>
            <Label error={!!error}>{label}</Label>
            <InputWrapper error={!!error}>
                <StyledInput name={name} type={type} value={value} onChange={inputChange} />
            </InputWrapper>
            <ErrorSpan>{error}</ErrorSpan>
        </Wrapper>
    );
};
