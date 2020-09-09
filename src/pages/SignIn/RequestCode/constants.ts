import * as Yup from 'yup';
import { invalidEmailMessage, requiredFieldMessage } from '../../../constants';

export const initialValues = { email: '', password: '' };

export const validationSchema = Yup.object().shape({
    email: Yup.string().email(invalidEmailMessage).required(requiredFieldMessage),
    password: Yup.string().required(requiredFieldMessage)
});
