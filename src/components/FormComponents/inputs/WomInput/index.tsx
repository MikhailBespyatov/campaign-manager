import { Badge } from 'components/common/Badge';
import { WomCurrencyImg } from 'components/common/imageComponents/WomCurrencyImg';
import { Span } from 'components/common/typography/Span';
import { ErrorSpan } from 'components/FormComponents/inputs/TextInput';
import { TextFieldStyled, useStyles } from 'components/FormComponents/inputs/TextInput/styles';
import { onCurrencyChange, womImgHeight } from 'components/FormComponents/inputs/WomInput/constants';
import { RelativeWrapper } from 'components/FormComponents/inputs/WomInput/styles';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { requiredFieldMessage } from 'constants/messages';
import { formGrey5, secondaryPadding } from 'constants/styles';
import { useStore } from 'effector-react';
import { useField } from 'formik';
import React, { ChangeEvent, useState } from 'react';
import { walletStores } from 'stores/wallet';
import { Disabled, Label, Placeholder, Type } from 'types';
import { currencyToText } from 'utils/usefulFunctions';

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
    const usdRate = useStore(walletStores.usdRate);

    const defaultWom = Number(field.value);

    const [currency, setCurrency] = useState(Number.isNaN(defaultWom) ? 0 : (usdRate * defaultWom).toFixed(2));

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => onCurrencyChange(e, setValue, setCurrency);

    return (
        <Section justifyCenter>
            <Column marginRight="2px" width={'100%'}>
                <RelativeWrapper>
                    <AbsoluteWrapper right="6px" top="12px" zIndex="4">
                        <WomCurrencyImg height={womImgHeight} />
                    </AbsoluteWrapper>
                    <TextFieldStyled
                        className={!touched ? classes.untouched : error ? classes.error : classes.success}
                        {...field}
                        disabled={disabled}
                        label={label}
                        placeholder={placeholder}
                        type={type}
                        onChange={onInputChange}
                    />
                </RelativeWrapper>
                <ErrorSpan touched={touched}>{!touched ? requiredFieldMessage : error}</ErrorSpan>
                <Row alignCenter>
                    <Column marginRight={secondaryPadding}>
                        <Badge>USD</Badge>
                    </Column>
                    {currency} $
                </Row>
                <Row>
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
                            {currencyToText(usdRate)} = 1 WOM
                        </Span>
                    </Column>
                </Row>
            </Column>
        </Section>
    );
};
