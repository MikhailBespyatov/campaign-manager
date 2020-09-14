import history from 'BrowserHistory';
import { routes } from 'constants/routes';
import { yupWom } from 'constants/yupFields';
import * as Yup from 'yup';

export const initialValues = { wom: '' };

export const validationSchema = Yup.object().shape({
    wom: yupWom
});

// interface ValuesProps {
//     wom: string;
// }

export const onSubmit = () => history.push(routes.signUp.payment);
