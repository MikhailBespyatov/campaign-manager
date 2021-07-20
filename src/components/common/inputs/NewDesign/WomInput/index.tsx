//import { InfoImg } from 'components/common/imageComponents/InfoImg';
import { WomCurrencyImg } from 'components/common/imageComponents/WomCurrencyImg';
import { TextInput } from 'components/common/inputs/NewDesign/TextInput';
import {
    inputFieldHeight,
    inputFieldMarginRight,
    inputFieldWidth,
    logoZIndex,
    textBlocksMargin,
    textFontWeight
} from 'components/common/inputs/NewDesign/WomInput/constants';
import { Select } from 'components/common/inputs/Select';
import { Span } from 'components/common/typography/Span';
import { ErrorSpan } from 'components/FormComponents/inputs/TextInput';
import { womImgHeight } from 'components/FormComponents/inputs/WomInput/constants';
import { RelativeWrapper } from 'components/FormComponents/inputs/WomInput/styles';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
//import { InfoPopover } from 'components/modals/InfoPopover';
import { grey4 } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { walletEffects, walletStores } from 'stores/wallet';
import { CurrencyType, Label } from 'types';
import { totalCurrency } from 'utils/usefulFunctions';

export interface WomInputProps extends Required<Label> {
    errorText?: string;
    value: string;
    onChange: (value: string) => void;
    isValid: boolean;
    isTouched?: boolean;
}

export interface CurrencyDataProps {
    balance: string | 0;
    // toString: () => string;
    rate: number;
    sign: string;
    name: string;
}

export const WomInput = ({ label, errorText, value, onChange, isValid, isTouched }: WomInputProps) => {
    const [usdRate, eurRate] = useStore(walletStores.rates);
    const walletBalance = useStore(walletStores.walletBalance);
    const USD = totalCurrency(walletBalance, usdRate);
    const EUR = totalCurrency(walletBalance, eurRate);

    const currencyData: {
        [key in CurrencyType]: CurrencyDataProps;
    } = {
        USD: {
            balance: USD,
            sign: '$',
            name: 'USD',
            rate: usdRate
            // toString: function () {
            //     return `$ ${this.value}`;
            // },
        },
        EUR: {
            balance: EUR,
            sign: '€',
            name: 'EUR',
            rate: eurRate
            // toString: function () {
            //     return `€ ${this.value}`;
            // },
        }
    };

    const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>('USD');
    const { balance, rate, sign, name } = currencyData[selectedCurrency];

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    const onCurrencySelect = (currency: CurrencyType) => {
        setSelectedCurrency(currency);
    };

    useEffect(() => {
        walletEffects.getTokenInfo();
    }, []);

    return (
        <Section alignEnd justifyBetween noWrap>
            <Row
                /* marginBottom={textBlocksMargin}*/
                marginRight={inputFieldMarginRight}
                marginTop={textBlocksMargin}
                width="50%"
            >
                <Column maxWidth={inputFieldWidth} width="100%">
                    <RelativeWrapper>
                        <AbsoluteWrapper left="20px" top="37px" zIndex={logoZIndex}>
                            <WomCurrencyImg height={womImgHeight} />
                        </AbsoluteWrapper>

                        <TextInput
                            labelUppercase
                            label={label}
                            labelFontSize="11px"
                            labelLineHeight="14px"
                            name="wom"
                            paddingLeft="60px"
                            paddingRight="170px"
                            type="number"
                            value={value}
                            onChange={onChangeInput}
                        />

                        {/* <AbsoluteWrapper right="20px" top="40px" zIndex={logoZIndex}>
                        <InfoPopover backgroundColor={popoverBackground} popoverText="Some additional information">
                            <InfoImg />
                        </InfoPopover>
                    </AbsoluteWrapper> */}

                        {!isValid && isTouched && (
                            <AbsoluteWrapper right="45px" top="35px" zIndex={logoZIndex}>
                                <ErrorSpan touched>{errorText}</ErrorSpan>
                            </AbsoluteWrapper>
                        )}
                    </RelativeWrapper>
                </Column>
            </Row>

            <Row marginRight={inputFieldMarginRight} marginTop={textBlocksMargin} width="50%">
                <Section alignEnd justifyBetween noWrap maxWidth={inputFieldWidth}>
                    <MarginWrapper /*marginBottom={textBlocksMargin}*/ marginRight={inputFieldMarginRight}>
                        <Select
                            height={inputFieldHeight}
                            values={Object.keys(currencyData)}
                            width="150px"
                            onChange={onCurrencySelect as (active: string) => void}
                        />
                    </MarginWrapper>
                    <Column justifyBetween noWrap /*height={inputFieldHeight}*/>
                        <Section>
                            <Span fontWeight={textFontWeight} lineHeight="17px">
                                {sign}&nbsp;{balance}
                                {/* {currencyData[selectedCurrency].toString()} */}
                            </Span>
                        </Section>

                        <Section>
                            <Span color={grey4} fontSize="13px" fontWeight={textFontWeight} lineHeight="20px">
                                Current Exchange Rate&nbsp;
                            </Span>
                            <Span color={grey4} fontSize="13px" fontWeight={textFontWeight} lineHeight="16px">
                                {sign + Number(rate).toFixed(2)} {name}&nbsp;= 1&nbsp;WOM
                            </Span>
                        </Section>
                    </Column>
                </Section>
            </Row>
        </Section>
    );
};
