import { TextInput } from 'components/common/inputs/Input';
import { wrapperBackground } from 'components/FormComponents/inputs/UserAdminTextInput/constants';
import { Wrapper } from 'components/FormComponents/inputs/UserAdminTextInput/styles';
import { blue, disabledGrey, errorColor, successColor } from 'constants/styles';
import { useField } from 'formik';
import React, { ChangeEvent } from 'react';
import { Disabled, Label, Placeholder, Sizes, Type, UntouchedWarning } from 'types';

interface Props extends Disabled, Placeholder, Type, Label, UntouchedWarning, Sizes {
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UserAdminTextInput = ({
    placeholder = 'Email address',
    //label = 'Email',
    disabled,
    type = 'text',
    name = 'email',
    onChange,
    width
}: //,untouchedWarning
Props) => {
    const [field, { error, touched }] = useField(name);

    const onInputChange = onChange || field.onChange;

    return (
        <Wrapper color={disabled ? disabledGrey : !touched ? blue : error ? errorColor : successColor} width={width}>
            <TextInput
                background={wrapperBackground}
                {...field}
                disabled={disabled}
                fontSize="18px"
                lineHeight="22px"
                placeholder={placeholder}
                type={type}
                width="100%"
                onChange={onInputChange}
            />
        </Wrapper>
    );
};
