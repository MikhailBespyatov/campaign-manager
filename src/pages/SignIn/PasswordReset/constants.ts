import * as Yup from 'yup';
import { requiredFieldMessage } from '../../../constants';

export const initialValues = { code: '', password: '' };

export const validationSchema = Yup.object().shape({
    code: Yup.string().required(requiredFieldMessage),
    password: Yup.string().required(requiredFieldMessage)
});
