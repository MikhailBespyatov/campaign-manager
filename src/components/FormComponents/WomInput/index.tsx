import womLogo from 'assets/img/wom_logo.svg';
import { Badge } from 'components/common/Badge';
import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { Span } from 'components/common/TextComponents/Span';
import { Column, Row, Section } from 'components/common/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/common/wrappers/MarginWrapper';
import {
    currencyToText,
    errorSpanHeight,
    inputFontSize,
    onCurrencyChange,
    womImgHeight,
    womImgWidth,
    wrapperWidth
} from 'components/FormComponents/WomInput/constants';
import { TextFieldStyled, useStyles } from 'components/FormComponents/WomInput/styles';
import { womExchangeRate } from 'constants/global';
import { errorColor, formGrey5 } from 'constants/styles';
import { useField } from 'formik';
import React, { ChangeEvent, useState } from 'react';
import { Disabled, Label, Placeholder, Type } from 'types';

interface Props extends Disabled, Placeholder, Type, Label {
    name?: string;
}

export const WomInput = ({
    // placeholder = 'Enter your needed WOM',
    placeholder = '',
    label = 'WOM',
    disabled,
    type = 'text',
    name = 'wom'
}: Props) => {
    const [field, { error, touched }, { setValue }] = useField(name);
    const classes = useStyles();

    const defaultWom = Number(field.value);

    const [currency, setCurrency] = useState(Number.isNaN(defaultWom) ? 0 : womExchangeRate * defaultWom);

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => onCurrencyChange(e, setValue, setCurrency);

    return (
        <Section justifyCenter>
            <Column alignCenter marginRight="2px" width={wrapperWidth}>
                <TextFieldStyled
                    className={!touched ? classes.untouched : error ? classes.error : classes.success}
                    {...field}
                    disabled={disabled}
                    label={label}
                    placeholder={placeholder}
                    type={type}
                    onChange={onInputChange}
                />
                <Row marginTop="5px" minHeight={errorSpanHeight}>
                    <Span
                        color={error ? errorColor : formGrey5}
                        fontSize="14px"
                        fontWeight="500"
                        letterSpacing="0.0950226px"
                        lineHeight="17px"
                    >
                        {error ? error : currencyToText(currency)}
                    </Span>
                </Row>
                <Row marginBottom="32px">
                    <Badge>USD</Badge>
                </Row>
                <Row marginBottom="63px">
                    <Column>
                        <Span
                            color={formGrey5}
                            fontSize="12px"
                            fontWeight="500"
                            letterSpacing="0.141177px"
                            lineHeight="18px"
                        >
                            Current Exchange Rate
                        </Span>
                        <Span
                            color={formGrey5}
                            fontSize="12px"
                            fontWeight="500"
                            letterSpacing="0.141177px"
                            lineHeight="18px"
                        >
                            {currencyToText(womExchangeRate)} = 1 WOM
                        </Span>
                    </Column>
                </Row>
            </Column>
            <MarginWrapper marginTop={inputFontSize}>
                <CustomImg height={womImgHeight} src={womLogo} width={womImgWidth} />
            </MarginWrapper>
        </Section>
    );
};
