import { Loader } from 'components/common/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignUp/AcceptInvite/constants';
import React from 'react';
import { useParams } from 'react-router';
import { loadingStores } from 'stores/loading';

// const HighlightSpan: FC = ({ children }) => (
//     <Span alignCenter fontSize="14px" fontWeight="500" lineHeight="17px" textDecoration="underline">
//         {children}
//     </Span>
// );

interface ParamsProps {
    inviteCode?: string;
}

export const AcceptInvite = () => {
    const { inviteCode } = useParams<ParamsProps>();
    const loading = useStore(loadingStores.loading);

    return (
        <AuthLayout>
            <Formik
                initialValues={{ ...initialValues, inviteCode: inviteCode || '' }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ handleSubmit, isValid, dirty }) => (
                    <Form subtitle="Accept invite" title="Create an account" onSubmit={handleSubmit}>
                        <TextInput disabled label="Invite Code" name="inviteCode" placeholder="" />
                        <TextInput label="Email" name="username" placeholder="Enter your email address" />
                        <TextInput
                            label="Create password"
                            name="password"
                            placeholder="Type your password"
                            type="password"
                            untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
                        />
                        <TextInput
                            label="Retype password"
                            name="repeatPassword"
                            placeholder="Retype your password"
                            type="password"
                            untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
                        />
                        {/* <MarginWrapper marginBottom="32px" marginLeft="auto" marginTop="3px">
                            <Column>
                                <Row>
                                    <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.index}>
                                        Enter as User
                                    </InternalLink>
                                </Row>
                                <InternalLink fontSize="16px" lineHeight="20px" to={routes.signIn.admin}>
                                    Enter as Admin
                                </InternalLink>
                            </Column>
                        </MarginWrapper> */}
                        <Button background={isValid && dirty ? blue : undefined} disabled={loading}>
                            {loading ? <Loader /> : 'ACCEPT INVITE'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
