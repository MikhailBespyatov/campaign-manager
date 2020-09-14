import { TextInput } from 'components/common/inputs/Input';
import { wrapperBackground } from 'components/common/inputs/InviteInput/constants';
import { Wrapper } from 'components/common/inputs/InviteInput/styles';
import { noop } from 'constants/global';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Placeholder, TextInput as TextInputProps } from 'types';

interface Props extends TextInputProps, Placeholder {}

export const InviteInput = ({
    //error,
    defaultValue = '',
    onChange = noop,
    placeholder = 'Enter Email address',
    name = 'email',
    type = 'email',
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
            <TextInput
                background={wrapperBackground}
                disabled={disabled}
                fontSize="18px"
                lineHeight="22px"
                name={name}
                placeholder={placeholder}
                type={type}
                width="100%"
                onChange={inputChange}
            />
        </Wrapper>
    );
};
