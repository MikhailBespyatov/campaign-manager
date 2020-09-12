import { invalidEmailMessage, requiredFieldMessage } from 'constants/messages';
import { userEffects, userEvents, userStores } from 'stores/user';
import { RegisterUserRequest } from 'types';
import * as Yup from 'yup';

export const initialValues = { email: '', password: '', companyName: '', username: '' };

export const validationSchema = Yup.object().shape({
    companyName: Yup.string().required(requiredFieldMessage),
    username: Yup.string().required(requiredFieldMessage),
    email: Yup.string().email(invalidEmailMessage).required(requiredFieldMessage),
    password: Yup.string().required(requiredFieldMessage)
});

//TODO: [any]
export const onSubmit = (values: RegisterUserRequest, { setErrors }: any) => {
    const unwatch = userStores.auth.watch(userEvents.setAuth, ({ authDenyReason }) => {
        setErrors({
            email: authDenyReason,
            password: authDenyReason
        });
        unwatch();
    });
    userEffects.createUserAndLoadToken(values);
};
