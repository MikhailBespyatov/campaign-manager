import { asyncErrorMessage } from 'constants/messages';
import Swal from 'sweetalert2';

interface errorHandlerProps {
    status: number;
    text: string;
    callback?: () => void;
}
export const errorHandler = (arr: errorHandlerProps[], exStatus: number) => {
    for (let i = 0; i <= arr.length; i++) {
        if (exStatus === arr[i].status) {
            Swal.fire('Error!', arr[i].text, 'error');
            arr[i].callback?.();
            return;
        }
    }
    Swal.fire('Error!', asyncErrorMessage, 'error');
    return;
};
