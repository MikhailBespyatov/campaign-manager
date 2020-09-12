import { requiredFieldMessage } from 'constants/messages';
import * as Yup from 'yup';

export const initialValues = { wom: '' };

export const validationSchema = Yup.object().shape({
    wom: Yup.string().required(requiredFieldMessage)
});
