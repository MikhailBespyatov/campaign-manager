import bitmapImg from 'assets/img/bitmap.png';
import womImg from 'assets/img/wom_logo.svg';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/TextComponents/Span';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import {
    onCardNumberChange,
    onCurrencyChange,
    onCvcChange,
    onExpiredDataChange,
    validationSchema
} from 'pages/SignUp/CreateWallet/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';
import { blue, noop } from '../../../constants';

export const CreateWallet = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout src={bitmapImg}>
            <Formik
                initialValues={{ wom: '', usd: '', cardNumber: '', expireDate: '', cvc: '' }}
                validationSchema={validationSchema}
                onSubmit={noop}
            >
                {({ errors, handleSubmit, touched, handleBlur, values, setFieldValue }) => (
                    <Form
                        src={womImg}
                        subtitle="To execute campaigns, you need a positive WOM balance. You can purchase WOM now."
                        title="WOM Wallet"
                        onSubmit={handleSubmit}
                    >
                        <TextInput
                            error={errors.wom}
                            label="WOM"
                            name="wom"
                            touched={touched.wom}
                            value={values.wom}
                            onBlur={handleBlur}
                            onChange={e => onCurrencyChange(e, setFieldValue)}
                        />
                        <TextInput
                            error={errors.usd}
                            label="USD"
                            name="usd"
                            touched={touched.usd}
                            value={values.usd}
                            onBlur={handleBlur}
                            onChange={e => onCurrencyChange(e, setFieldValue)}
                        />
                        <TextInput
                            error={errors.cardNumber}
                            label="Credit Card Number"
                            name="cardNumber"
                            touched={touched.cardNumber}
                            value={values.cardNumber}
                            onBlur={handleBlur}
                            onChange={e => onCardNumberChange(e, setFieldValue)}
                        />
                        <TextInput
                            error={errors.expireDate}
                            label="Expire Date"
                            name="expireDate"
                            touched={touched.expireDate}
                            value={values.expireDate}
                            onBlur={handleBlur}
                            onChange={e => onExpiredDataChange(e, setFieldValue)}
                        />
                        <TextInput
                            error={errors.cvc}
                            label="CVC"
                            name="cvc"
                            touched={touched.cvc}
                            type="password"
                            value={values.cvc}
                            onBlur={handleBlur}
                            onChange={e => onCvcChange(e, setFieldValue)}
                        />
                        <Button background={blue} disabled={loading}>
                            {loading ? <Loader /> : 'PURCHASE NOW'}
                        </Button>
                        <Span alignCenter color="#9EA1B3" fontSize="18px" fontWeight="500" lineHeight="22px">
                            Buy WOM later
                        </Span>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
