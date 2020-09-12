import { Span } from 'components/common/TextComponents/Span';
import { Row } from 'components/common/wrappers/FlexWrapper';
import { errorSpanHeight, errorSpanMarginBottom } from 'components/FormComponents/TextInput/constants';
import { TextFieldStyled, useStyles, Wrapper } from 'components/FormComponents/TextInput/styles';
import { requiredFieldMessage } from 'constants/messages';
import { errorColor, formGrey5 } from 'constants/styles';
import { useField } from 'formik';
import React, { ChangeEvent } from 'react';
import { Disabled, Label, Placeholder, Type, UntouchedWarning } from 'types';
interface Props extends Disabled, Placeholder, Type, Label, UntouchedWarning {
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
    placeholder = 'Enter your email address',
    label = 'Email',
    disabled,
    type = 'text',
    name,
    onChange,
    untouchedWarning
}: Props) => {
    const [field, { error, touched }] = useField(name);
    const classes = useStyles();

    const onInputChange = onChange || field.onChange;

    return (
        <Wrapper>
            <TextFieldStyled
                className={!touched ? classes.untouched : error ? classes.error : classes.success}
                {...field}
                disabled={disabled}
                label={label}
                placeholder={placeholder}
                type={type}
                onChange={onInputChange}
            />
            <Row alignCenter height={errorSpanHeight} marginBottom={errorSpanMarginBottom}>
                <Span color={!touched ? formGrey5 : errorColor} fontSize="12px" fontWeight="500" lineHeight="15px">
                    {!touched ? (untouchedWarning ? untouchedWarning : requiredFieldMessage) : error}
                </Span>
            </Row>
        </Wrapper>
    );
};
