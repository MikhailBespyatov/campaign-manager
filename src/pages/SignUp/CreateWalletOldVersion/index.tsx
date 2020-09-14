import womImg from 'assets/img/wom_logo.svg';
import { Loader } from 'components/common/Loader';
import { Span } from 'components/common/TextComponents/Span';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { TextInput } from 'components/FormComponents/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { noop } from 'constants/global';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import {
    initialValues,
    onCardNumberChange,
    onCurrencyChange,
    onCvcChange,
    onExpiredDataChange,
    validationSchema
} from 'pages/SignUp/CreateWalletOldVersion/constants';
import React, { ChangeEvent } from 'react';
import { loadingStores } from 'stores/loading';

export const CreateWalletOldVersion = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={noop}>
                {({ handleSubmit, setFieldValue }) => (
                    <Form
                        src={womImg}
                        subtitle="To execute campaigns, you need a positive WOM balance. You can purchase WOM now."
                        title="WOM Wallet"
                        onSubmit={handleSubmit}
                    >
                        <TextInput
                            name="wom"
                            placeholder="WOM"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onCurrencyChange(e, setFieldValue)}
                        />
                        <TextInput
                            name="usd"
                            placeholder="USD"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onCurrencyChange(e, setFieldValue)}
                        />
                        <TextInput
                            name="cardNumber"
                            placeholder="Credit Card Number"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onCardNumberChange(e, setFieldValue)}
                        />
                        <TextInput
                            name="expireDate"
                            placeholder="Expire Date"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onExpiredDataChange(e, setFieldValue)}
                        />
                        <TextInput
                            name="cvc"
                            placeholder="CVC"
                            type="password"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => onCvcChange(e, setFieldValue)}
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
