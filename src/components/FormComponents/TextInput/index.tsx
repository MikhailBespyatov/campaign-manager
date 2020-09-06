import errorImg from 'assets/img/error.svg';
import successImg from 'assets/img/success.svg';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { TextInput as StyledInput } from 'components/common/inputs/Input';
import { Span } from 'components/common/TextComponents/Span';
import { AbsoluteWrapper } from 'components/common/wrappers/AbsoluteWrapper';
import { Row } from 'components/common/wrappers/FlexWrapper';
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
} from 'components/FormComponents/TextInput/constants';
import { InputWrapper, Wrapper } from 'components/FormComponents/TextInput/styles';
import React, { ChangeEvent, FocusEvent } from 'react';
import { TextFormInput } from 'types';
import { defaultAlt, errorColor, noop, requiredFieldMessage, successColor, untouchedColor } from '../../../constants';

interface Props extends TextFormInput {
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    touched?: boolean;
}

export const TextInput = ({
    error,
    // defaultValue = '',
    value,
    onChange = noop,
    label,
    name,
    type = name,
    disabled = false,
    onBlur = noop,
    touched = false
}: Props) => (
    // const [value, setValue] = useState(defaultValue);

    // const inputChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    // useEffect(() => {
    //     onChange(value);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [value]);

    <Wrapper>
        <Row marginBottom={labelMarginBottom}>
            <Span
                color={disabled ? disabledColor : !touched ? untouchedColor : error ? errorColor : successColor}
                fontSize={labelFontSize}
                fontWeight={labelFontWeight}
                lineHeight={labelLineHeight}
            >
                {label}
            </Span>
        </Row>
        {/* <Label error={!!error}>{label}</Label> */}
        <InputWrapper disabled={disabled} error={!!error} success={!disabled && !error} touched={touched}>
            <StyledInput
                background={disabled ? disabledColor : inputBackground}
                disabled={disabled}
                name={name}
                type={type}
                value={value}
                width="100%"
                onBlur={onBlur}
                onChange={onChange}
            />
            {touched && !disabled && (
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
