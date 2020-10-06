import amexImg from 'assets/img/amex.svg';
import discoverImg from 'assets/img/discover.svg';
import mastercardImg from 'assets/img/mastercard.svg';
import paypalImg from 'assets/img/paypal.svg';
import visaImg from 'assets/img/visa.svg';
import womImg from 'assets/img/wom_logo.svg';
import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/typography/Span';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { BooleanCheckbox } from 'components/FormComponents/inputs/BooleanCheckbox';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Row, Section } from 'components/grid/wrappers/FlexWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { routes } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import {
    cardHeight,
    cardWidth,
    expirationDateMarginRight,
    initialValues,
    onCardNumberChange,
    onCvcChange,
    onExpiredDataChange,
    onSubmit,
    validationSchema
} from 'pages/SignUp/CreateWallet/Payment/constants';
import React, { ChangeEvent } from 'react';
import { loadingStores } from 'stores/loading';

export const Payment = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, setFieldValue, isValid, dirty }) => (
                    <Form
                        src={womImg}
                        subtitle="Select your payment method to purchase the WOM."
                        title="WOM Wallet"
                        onSubmit={handleSubmit}
                    >
                        <Section justifyCenter marginBottom="37px">
                            <Column marginRight="10px">
                                <CustomImg pointer height={cardHeight} src={visaImg} width={cardWidth} />
                            </Column>
                            <Column marginRight="10px">
                                <CustomImg pointer height={cardHeight} src={mastercardImg} width={cardWidth} />
                            </Column>
                            <Column marginRight="10px">
                                <CustomImg pointer height={cardHeight} src={amexImg} width={cardWidth} />
                            </Column>
                            <Column marginRight="10px">
                                <CustomImg pointer height={cardHeight} src={discoverImg} width={cardWidth} />
                            </Column>
                            <Column marginRight="10px">
                                <CustomImg pointer height={cardHeight} src={paypalImg} width={cardWidth} />
                            </Column>
                        </Section>
                        <TextInput label="Name on card" name="cardName" placeholder="Enter card name" />
                        <TextInput
                            label="Card number"
                            name="cardNumber"
                            placeholder="Enter Card Number"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onCardNumberChange(e, setFieldValue)}
                        />
                        <Section noWrap>
                            <Column marginRight={expirationDateMarginRight} width="50%">
                                <TextInput
                                    label="Expiration date"
                                    name="expireDate"
                                    placeholder="MM/YY"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                        onExpiredDataChange(e, setFieldValue)
                                    }
                                />
                            </Column>
                            <Column marginRight="0" width="50%">
                                <TextInput
                                    label="Security code"
                                    name="cvc"
                                    placeholder="CVC"
                                    type="password"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => onCvcChange(e, setFieldValue)}
                                />
                            </Column>
                        </Section>
                        <Section alignCenter noWrap marginBottom="51px" marginTop="22px">
                            <Column marginRight="15px">
                                <BooleanCheckbox />
                            </Column>
                            <Span fontSize="14px" fontWeight="500" lineHeight="17px">
                                Save card for payment
                            </Span>
                        </Section>
                        <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                            {loading ? <Loader /> : 'PURCHASE NOW'}
                        </Button>
                        <Row marginTop="25px">
                            <InternalLink fontSize="14px" lineHeight="21px" to={routes.campaignManager.index}>
                                Buy WOM later
                            </InternalLink>
                        </Row>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
