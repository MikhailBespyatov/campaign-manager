import history from 'BrowserHistory';
import { requiredFieldMessage } from 'constants/messages';
import { routes } from 'constants/routes';
import * as Yup from 'yup';

export const linkMarginTop = '0';
export const linkMarginBottom = '57px';

export const initialValues = { companyName: '' };

export const validationSchema = Yup.object().shape({
    companyName: Yup.string().required(requiredFieldMessage)
});

// interface SetErrorsFormikProps {
//     setErrors: (
//         errors: FormikErrors<{
//             companyName?: string;
//         }>
//     ) => void;
// }

export const onSubmit = () => history.push(routes.signIn.adidas);
