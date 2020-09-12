import { Loader } from 'components/common/Loader';
import { InternalLink } from 'components/common/TextComponents/InternalLink';
import { Row } from 'components/common/wrappers/FlexWrapper';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { WomInput } from 'components/FormComponents/WomInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { noop } from 'constants/global';
import { routes } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, validationSchema } from 'pages/SignUp/CreateWallet/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const CreateWallet = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={noop}>
                {({ handleSubmit, errors, touched }) => (
                    <Form
                        subSubtitle="We have created a WOM Wallet and associated this with <Company Name> account."
                        subtitle="To execute campaigns, you need a positive WOM balance. You can purchase WOM now."
                        title="WOM Wallet"
                        onSubmit={handleSubmit}
                    >
                        <WomInput />
                        <Button
                            background={touched.wom && !Object.values(errors).length ? blue : undefined}
                            disabled={loading}
                        >
                            {loading ? <Loader /> : 'PURCHASE NOW'}
                        </Button>
                        <Row marginTop="25px">
                            <InternalLink
                                //alignCenter
                                fontSize="14px"
                                lineHeight="21px"
                                to={routes.campaignManager.index}
                            >
                                Buy WOM later
                            </InternalLink>
                        </Row>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
