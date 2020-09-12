import { invalidEmailMessage, requiredFieldMessage } from 'constants/messages';
import { userEffects, userEvents, userStores } from 'stores/user';
import { AuthUserRequest } from 'types';
import * as Yup from 'yup';

export const linkMarginTop = '0';
export const linkMarginBottom = '57px';

export const initialValues = { email: '', password: '' };

export const validationSchema = Yup.object().shape({
    email: Yup.string().email(invalidEmailMessage).required(requiredFieldMessage),
    password: Yup.string().required(requiredFieldMessage)
});

// TODO: [any]
export const onSubmit = (values: AuthUserRequest, { setErrors }: any) => {
    const unwatch = userStores.auth.watch(userEvents.setAuth, ({ authDenyReason }) => {
        setErrors({
            email: authDenyReason,
            password: authDenyReason
        });
        unwatch();
    });
    userEffects.loadToken(values);
};
