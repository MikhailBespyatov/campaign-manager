import React, { ChangeEvent, useEffect } from 'react';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { Label } from 'types';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { WomCurrencyImg } from 'components/common/imageComponents/WomCurrencyImg';
import { womImgHeight } from 'components/FormComponents/inputs/WomInput/constants';
import { TextInput } from 'components/common/inputs/NewDesign/TextInput';
import { ErrorSpan } from 'components/FormComponents/inputs/TextInput';
import { RelativeWrapper } from 'components/FormComponents/inputs/WomInput/styles';
import { grey4 } from 'constants/styles';
import { Span } from 'components/common/typography/Span';
import { currencyToText, totalCurrency } from 'utils/usefulFunctions';
import { useStore } from 'effector-react';
import { walletEffects, walletStores } from 'stores/wallet';

export interface WomInputProps extends Required<Label> {
    errorText?: string;
    value: string;
    onChange: (value: string) => void;
    isValid: boolean;
}

export const WomInput = ({ label, errorText, value, onChange, isValid }: WomInputProps) => {
    const [usdRate, eurRate] = useStore(walletStores.rates);
    const walletBalance = useStore(walletStores.walletBalance);
    const USD = totalCurrency(walletBalance, usdRate);
    const EUR = totalCurrency(walletBalance, eurRate);
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

    useEffect(() => {
        walletEffects.getTokenInfo();
    }, []);

    return (
        <Section alignCenter justifyAround>
            <Column marginBottom="20px" width="500px">
                <RelativeWrapper>
                    <AbsoluteWrapper left="20px" top="38px" zIndex="4">
                        <WomCurrencyImg height={womImgHeight} />
                    </AbsoluteWrapper>
                    <TextInput
                        label={label}
                        name="wom"
                        paddingLeft="60px"
                        type="number"
                        value={value}
                        onChange={onChangeInput}
                    />
                    {!isValid && (
                        <AbsoluteWrapper right="40px" top="38px" zIndex="4">
                            <ErrorSpan touched>{errorText}</ErrorSpan>
                        </AbsoluteWrapper>
                    )}
                </RelativeWrapper>
            </Column>
            {/*<Column>*/}
            {/*    <Badge>USD</Badge>*/}
            {/*</Column>*/}
            <Column justifyAround height="70px">
                <Row>Balance: {walletBalance} WOM</Row>
                <Row>
                    $ {USD} / € {EUR}
                </Row>
                <Row>
                    <Span color={grey4} fontSize="13px" fontWeight="400" lineHeight="16px">
                        Current Exchange Rate {currencyToText(usdRate)} \ {currencyToText(eurRate, ['EUR', '€'])} = 1
                        WOM
                    </Span>
                </Row>
            </Column>
        </Section>
    );
};
