import { Span } from 'components/common/typography/Span';
import { errorSpanHeight, errorSpanMarginBottom } from 'components/FormComponents/inputs/TextInput/constants';
import { TextFieldForm, Wrapper } from 'components/FormComponents/inputs/TextInput/styles';
import { Row } from 'components/grid/wrappers/FlexWrapper';
import { requiredFieldMessage } from 'constants/messages';
import { errorColor, formGrey6 } from 'constants/styles';
import { useField } from 'formik';
import React, { ChangeEvent, FC } from 'react';
import { Disabled, Label, Placeholder, Touched, Type, UntouchedWarning } from 'types';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';

interface Props extends Disabled, Placeholder, Type, Label, UntouchedWarning {
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

interface ErrorSpanProps extends Touched {}

export const ErrorSpan: FC<ErrorSpanProps> = ({ children, touched }) => (
    <Row marginBottom={errorSpanMarginBottom} marginTop="5px" minHeight={errorSpanHeight}>
        <Span color={!touched ? formGrey6 : errorColor} fontSize="15px" fontWeight="400" lineHeight="18px">
            {children}
        </Span>
    </Row>
);

export const TextInput = ({
    placeholder = 'Enter your email address',
    label = 'Email',
    disabled,
    type = 'text',
    name,
    onChange,
    untouchedWarning,
    required
}: Props) => {
    const [field, { error, touched }] = useField(name);
    // const classes = useStyles();

    const onInputChange = onChange || field.onChange;

    return (
        <Wrapper>
            {/*<TextFieldStyled*/}
            {/*    className={!touched ? classes.untouched : error ? classes.error : classes.success}*/}
            {/*    {...field}*/}
            {/*    disabled={disabled}*/}
            {/*    label={label}*/}
            {/*    placeholder={placeholder}*/}
            {/*    type={type}*/}
            {/*    onChange={onInputChange}*/}
            {/*/>*/}
            <MarginWrapper marginBottom="8px">
                <Span fontSize="15px" fontWeight="400" lineHeight="19px">
                    {label}
                    {required && `*`}
                </Span>
            </MarginWrapper>
            <TextFieldForm
                disabled={disabled}
                {...field}
                placeholder={placeholder}
                type={type}
                onChange={onInputChange}
            />
            <ErrorSpan touched={touched}>
                {!touched ? (untouchedWarning ? untouchedWarning : requiredFieldMessage) : error}
            </ErrorSpan>
        </Wrapper>
    );
};
