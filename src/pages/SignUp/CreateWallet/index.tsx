import { InternalLink } from 'components/common/links/InternalLink';
import { Loader } from 'components/common/Loader';
import { Row } from 'components/common/wrappers/FlexWrapper';
import { Button } from 'components/FormComponents/Button';
import { Form } from 'components/FormComponents/Form';
import { WomInput } from 'components/FormComponents/WomInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { routes } from 'constants/routes';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignUp/CreateWallet/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';

export const CreateWallet = () => {
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Form
                        subSubtitle="We have created a WOM Wallet and associated this with <Company Name> account."
                        subtitle="To execute campaigns, you need a positive WOM balance. You can purchase WOM now."
                        title="WOM Wallet"
                        onSubmit={handleSubmit}
                    >
                        <WomInput />
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
