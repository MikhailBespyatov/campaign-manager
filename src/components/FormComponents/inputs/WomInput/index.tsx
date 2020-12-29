import { Badge } from 'components/common/Badge';
import { WomCurrencyImg } from 'components/common/imageComponents/WomCurrencyImg';
import { Span } from 'components/common/typography/Span';
import { ErrorSpan } from 'components/FormComponents/inputs/TextInput';
import { TextFieldForm } from 'components/FormComponents/inputs/TextInput/styles';
import { onCurrencyChange, womImgHeight } from 'components/FormComponents/inputs/WomInput/constants';
import { RelativeWrapper } from 'components/FormComponents/inputs/WomInput/styles';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { noop } from 'constants/global';
import { requiredFieldMessage } from 'constants/messages';
import { formGrey5, secondaryPadding } from 'constants/styles';
import { useStore } from 'effector-react';
import { useField } from 'formik';
import React, { ChangeEvent, useState } from 'react';
import { walletStores } from 'stores/wallet';
import { Disabled, Label, Placeholder, Type } from 'types';
import { currencyToText } from 'utils/usefulFunctions';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';

interface Props extends Disabled, Placeholder, Type, Label {
    setStatus?: (status?: any) => void;
    status?: any;
    name?: string;
}

export const WomInput = ({
    // placeholder = 'Enter your needed WOM',
    placeholder = '',
    label = 'WOM',
    disabled,
    type = 'text',
    name = 'wom',
    status,
    setStatus = noop
}: Props) => {
    const [field, { touched }, { setValue, setTouched }] = useField(name);
    // const classes = useStyles();
    const usdRate = useStore(walletStores.usdRate);

    const defaultWom = Number(field.value);

    const [currency, setCurrency] = useState(Number.isNaN(defaultWom) ? 0 : (usdRate * defaultWom).toFixed(2));

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
        onCurrencyChange(e, setValue, setCurrency, setTouched, setStatus);

    return (
        <Section justifyCenter>
            <Column marginRight="2px" width={'100%'}>
                <MarginWrapper marginBottom="8px">
                    <Span fontSize="15px" fontWeight="400" lineHeight="19px">
                        {label}
                    </Span>
                </MarginWrapper>
                <RelativeWrapper>
                    <AbsoluteWrapper left="15px" top="22px" zIndex="4">
                        <WomCurrencyImg height={womImgHeight} />
                    </AbsoluteWrapper>
                    {/*<TextFieldStyled*/}
                    {/*    className={*/}
                    {/*        !touched ? classes.untouched : error || status?.amount ? classes.error : classes.success*/}
                    {/*    }*/}
                    {/*    {...field}*/}
                    {/*    disabled={disabled}*/}
                    {/*    label={label}*/}
                    {/*    placeholder={placeholder}*/}
                    {/*    type={type}*/}
                    {/*    onChange={onInputChange}*/}
                    {/*/>*/}
                    <TextFieldForm
                        {...field}
                        disabled={disabled}
                        paddingLeft="60px"
                        placeholder={placeholder}
                        type={type}
                        onChange={onInputChange}
                    />
                    <AbsoluteWrapper right="40px" top="22px" zIndex="4">
                        <ErrorSpan touched={touched}>{status?.amount || ''}</ErrorSpan>
                    </AbsoluteWrapper>
                </RelativeWrapper>
                <ErrorSpan>{requiredFieldMessage}</ErrorSpan>
                <Row alignCenter>
                    <Column marginRight={secondaryPadding}>
                        <Badge>USD</Badge>
                    </Column>
                    <Column marginLeft="20px">
                        $ {currency}
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
