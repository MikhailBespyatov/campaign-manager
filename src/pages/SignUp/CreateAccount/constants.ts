import * as Yup from 'yup';
import { invalidEmailMessage, requiredFieldMessage } from '../../../constants';

export const validationSchema = Yup.object().shape({
    companyName: Yup.string().required(requiredFieldMessage),
    username: Yup.string().required(requiredFieldMessage),
    email: Yup.string().email(invalidEmailMessage).required(requiredFieldMessage),
    password: Yup.string().required(requiredFieldMessage)
});
