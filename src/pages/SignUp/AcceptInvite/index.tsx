import darkLogo from 'assets/img/logo_dark.svg';
import { Loader } from 'components/dynamic/Loader';
import { Button } from 'components/FormComponents/buttons/Button';
import { Form } from 'components/FormComponents/forms/Form';
import { TextInput } from 'components/FormComponents/inputs/TextInput';
import { AuthLayout } from 'components/Layouts/AuthLayout';
import { black, blue } from 'constants/styles';
import { useStore } from 'effector-react';
import { Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from 'pages/SignUp/AcceptInvite/constants';
import React from 'react';
import { useParams } from 'react-router';
import { loadingStores } from 'stores/loading';

// const HighlightSpan: FC = ({ children }) => (
//     <Span alignCenter fontSize={defaultFontSize} fontWeight="500" lineHeight="17px" textDecoration="underline">
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
                    <Form
                        customLogo={darkLogo}
                        customLogoDiameter="60px"
                        subtitle="Accept Invitation"
                        title="Create Your Account"
                        onSubmit={handleSubmit}
                    >
                        <TextInput
                            disabled
                            label="INVITE CODE"
                            marginBottom="5px"
                            name="inviteCode"
                            placeholder="Enter invitation code"
                            untouchedWarning=" "
                        />
                        <TextInput
                            label="USER NAME"
                            marginBottom="5px"
                            name="username"
                            placeholder="Enter your user name"
                            untouchedWarning=" "
                        />
                        <TextInput
                            label="CREATE PASSWORD"
                            name="password"
                            placeholder="Create your new password"
                            type="password"
                            untouchedWarning="Password should be 8 or more characters and include a capital letter and a number"
                        />
                        <TextInput
                            label="RETYPE PASSWORD"
                            marginBottom="65px"
                            name="repeatPassword"
                            placeholder="Retype your new password"
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
                        <Button
                            background={isValid && dirty ? blue : undefined}
                            color={black}
                            disabled={loading}
                            fontWeight="700"
                        >
                            {loading ? <Loader /> : 'ACCEPT INVITATION'}
                        </Button>
                    </Form>
                )}
            </Formik>
        </AuthLayout>
    );
};
