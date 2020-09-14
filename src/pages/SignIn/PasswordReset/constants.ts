import history from 'BrowserHistory';
import { routes } from 'constants/routes';
import { yupEmail } from 'constants/yupFields';
import * as Yup from 'yup';

export const linkMarginTop = '0';
export const linkMarginBottom = '57px';

export const initialValues = { email: '' };

export const validationSchema = Yup.object().shape({
    email: yupEmail
});

// interface SetErrorsFormikProps {
//     setErrors: (
//         errors: FormikErrors<{
//             email?: string;
//             password?: string;
//         }>
//     ) => void;
// }

// export const onSubmit = (values: AuthUserRequest, { setErrors }: SetErrorsFormikProps) => {
//     const unwatch = userStores.auth.watch(userEvents.setAuth, ({ authDenyReason }) => {
//         setErrors({
//             email: authDenyReason,
//             password: authDenyReason
//         });
//         unwatch();
//     });
//     userEffects.loadToken(values);
// };

export const onSubmit = () => history.push(routes.signIn.password);
