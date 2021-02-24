import React, { ChangeEvent, useEffect, useState } from 'react';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { Label } from 'types';
import { AbsoluteWrapper } from 'components/grid/wrappers/AbsoluteWrapper';
import { WomCurrencyImg } from 'components/common/imageComponents/WomCurrencyImg';
import { womImgHeight } from 'components/FormComponents/inputs/WomInput/constants';
import { TextInput } from 'components/common/inputs/NewDesign/TextInput';
import { ErrorSpan } from 'components/FormComponents/inputs/TextInput';
import { RelativeWrapper } from 'components/FormComponents/inputs/WomInput/styles';
import { Badge } from 'components/common/Badge';
import { grey4 } from 'constants/styles';
import { Span } from 'components/common/typography/Span';
import { currencyToText } from 'utils/usefulFunctions';
import { useStore } from 'effector-react';
import { walletEffects, walletStores } from 'stores/wallet';

export interface WomInputProps extends Required<Label> {
    errorText?: string;
    value: number;
    onChange: (value: number) => void;
}

export const WomInput = ({ label, errorText, value, onChange }: WomInputProps) => {
    const usdRate = useStore(walletStores.usdRate);
    const defaultWom = 0;

    const [currency] = useState(Number.isNaN(defaultWom) ? 0 : (usdRate * defaultWom).toFixed(2));

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => onChange(parseInt(e.target.value || '0'));

    useEffect(() => {
        walletEffects.getTokenInfo();
    }, []);

    return (
        <Section alignEnd justifyAround>
            <Column width="500px">
                <RelativeWrapper>
                    <AbsoluteWrapper left="20px" top="43px" zIndex="4">
                        <WomCurrencyImg height={womImgHeight} />
                    </AbsoluteWrapper>
                    <TextInput label={label} name="wom" paddingLeft="60px" value={value} onChange={onChangeInput} />
                    <AbsoluteWrapper right="40px" top="43px" zIndex="4">
                        <ErrorSpan touched>{errorText}</ErrorSpan>
                    </AbsoluteWrapper>
                </RelativeWrapper>
            </Column>
            <Column>
                <Badge>USD</Badge>
            </Column>
            <Column justifyAround height="49px">
                <Row>$ {currency}</Row>
                <Row>
                    <Span color={grey4} fontSize="13px" fontWeight="400" lineHeight="16px">
                        Current Exchange Rate {currencyToText(usdRate)} = 1 WOM
                    </Span>
                </Row>
            </Column>
        </Section>
    );
};
