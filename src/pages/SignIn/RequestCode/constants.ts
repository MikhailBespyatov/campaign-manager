import { invalidEmailMessage, requiredFieldMessage } from 'constants/messages';
import * as Yup from 'yup';

export const initialValues = { email: '', password: '' };

export const validationSchema = Yup.object().shape({
    email: Yup.string().email(invalidEmailMessage).required(requiredFieldMessage),
    password: Yup.string().required(requiredFieldMessage)
});
