import { InfoImg } from 'components/common/imageComponents/InfoImg';
import { WomCurrencyImg } from 'components/common/imageComponents/WomCurrencyImg';
import { TextInput } from 'components/common/inputs/NewDesign/TextInput';
import {
    inputFieldHeight,
    inputFieldMarginRight,
    inputFieldWidth,
    logoZIndex,
    textFontWeight
} from 'components/common/inputs/NewDesign/WomInput/constants';
import { Select } from 'components/common/inputs/Select';
import { Span } from 'components/common/typography/Span';
import { ErrorSpan } from 'components/FormComponents/inputs/TextInput';
import { womImgHeight } from 'components/FormComponents/inputs/WomInput/constants';
import { RelativeWrapper } from 'components/FormComponents/inputs/WomInput/styles';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { InfoPopover } from 'components/modals/InfoPopover';
import { grey4, popoverBackground } from 'constants/styles';
import { useStore } from 'effector-react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { walletEffects, walletStores } from 'stores/wallet';
import { Label } from 'types';
import { currencyToText, totalCurrency } from 'utils/usefulFunctions';

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

    const currencyData = {
        USD: {
            rate: usdRate,
            currencyToString: `$ ${USD}`
        },
        EUR: {
            rate: eurRate,
            currencyToString: `€ ${EUR}`
        }
    };
    const [selectedCurrency, setSelectedCurrency] = useState<keyof typeof currencyData>('USD');

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
    const onCurrencySelect = (currency: keyof typeof currencyData) => {
        setSelectedCurrency(currency);
    };

    useEffect(() => {
        walletEffects.getTokenInfo();
    }, []);

    return (
        <Section alignEnd justifyCenter>
            <Row marginRight={inputFieldMarginRight} marginTop="8px" width={inputFieldWidth}>
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
                    <AbsoluteWrapper right="20px" top="40px" zIndex={logoZIndex}>
                        <InfoPopover backgroundColor={popoverBackground} popoverText="Some additional information">
                            <InfoImg />
                        </InfoPopover>
                    </AbsoluteWrapper>

                    {!isValid && (
                        <AbsoluteWrapper right="45px" top="35px" zIndex={logoZIndex}>
                            <ErrorSpan touched>{errorText}</ErrorSpan>
                        </AbsoluteWrapper>
                    )}
                </RelativeWrapper>
            </Row>

            <Row justifyBetween marginRight={inputFieldMarginRight} marginTop="8px" width={inputFieldWidth}>
                <Select
                    height={inputFieldHeight}
                    values={Object.keys(currencyData)}
                    width="150px"
                    onChange={() => onCurrencySelect}
                />
                <Column justifyBetween height={inputFieldHeight}>
                    <Row>
                        <Span fontWeight={textFontWeight} lineHeight="17px">
                            {currencyData[selectedCurrency].currencyToString}
                        </Span>
                    </Row>

                    <Row>
                        <Span color={grey4} fontSize="13px" fontWeight={textFontWeight} lineHeight="16px">
                            Current Exchange Rate&nbsp;
                            {currencyToText(currencyData[selectedCurrency].rate)}
                            &nbsp;=&nbsp;1&nbsp;WOM
                        </Span>
                    </Row>
                </Column>
            </Row>
        </Section>
    );
};
