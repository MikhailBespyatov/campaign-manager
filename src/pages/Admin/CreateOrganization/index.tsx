import { FormSignUpLink } from 'components/common/links/FormSignUpLink';
import { Loader } from 'components/common/Loader';
import { P } from 'components/common/typography/titles/P';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { Column, Row } from 'components/grid/wrappers/FlexWrapper';
import { MarginWrapper } from 'components/grid/wrappers/MarginWrapper';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/Admin/CreateOrganization/constants';
import React from 'react';
import { loadingStores } from 'stores/loading';
import { userEvents } from 'stores/user';

export const CreateOrganization = () => {
    const loading = useStore(loadingStores.loading);

    const onClick = () => userEvents.logout();

    return (
        <AuthLayout>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ handleSubmit, isValid, dirty }) => (
                    <Column marginLeft="auto" marginRight="auto">
                        <Form
                            subtitle="Create new organization and its Organization Administrator"
                            title="Hello, WOM Administrator!"
                            onSubmit={handleSubmit}
                        >
                            <TextInput
                                label="Company Name"
                                name="companyName"
                                placeholder="Enter your new company name"
                            />
                            <TextInput
                                label="Administrator Email"
                                name="administratorEmail"
                                placeholder="Enter its administrator email"
                                type="email"
                            />
                            <MarginWrapper marginBottom="32px" marginLeft="auto" marginTop="3px">
                                <Column>
                                    <Row>
                                        <P onClick={onClick}>Log out</P>
                                    </Row>
                                </Column>
                            </MarginWrapper>
                            <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                                {loading ? <Loader /> : 'CREATE'}
                            </Button>
                        </Form>
                        <FormSignUpLink />
                    </Column>
                )}
            </Formik>
        </AuthLayout>
    );
};
