import { createMuiTheme } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';

export const defaultKeyboardButtonProps = {
    'aria-label': 'change date'
};

export const imagePositionTop = '10px';
export const imagePositionRight = '0px';
export const dateInputHeight = '22px';

export const defaultFormat = 'MM/dd/yyyy';

export const materialTheme = createMuiTheme({
    overrides: {
        // this ts issue is lib problem
        // @ts-ignore
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: lightBlue.A200,
                width: '100%'
            }
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                // backgroundColor: lightBlue.A200,
                // color: "white",
            }
        },
        MuiPickersDay: {
            day: {
                color: lightBlue.A700
            },
            daySelected: {
                backgroundColor: lightBlue['400']
            },
            dayDisabled: {
                color: lightBlue['100']
            },
            current: {
                color: lightBlue['900']
            }
        },
        MuiPickersModal: {
            dialogAction: {
                color: lightBlue['400']
            }
        }
    }
});

export const titleMarginBottom = '16px';
