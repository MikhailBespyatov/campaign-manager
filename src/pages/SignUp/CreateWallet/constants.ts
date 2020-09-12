import history from 'BrowserHistory';
import { requiredFieldMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import * as Yup from 'yup';

export const initialValues = { wom: '' };

export const validationSchema = Yup.object().shape({
    wom: Yup.string().required(requiredFieldMessage)
});

// interface ValuesProps {
//     wom: string;
// }

// interface SetErrorsFormikProps {
//     setErrors: (
//         errors: FormikErrors<{
//             email?: string;
//             password?: string;
//         }>
//     ) => void;
// }

// export const onSubmit = ({ wom }: ValuesProps, { setErrors }: SetErrorsFormikProps) => {
export const onSubmit = () => history.push(routes.signUp.payment);
