import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { defaultFontFamily, defaultFontStyle, defaultFontWeight } from 'constants/defaults';
import { errorColor, formGrey3, primaryColor, successColor, untouchedColor } from 'constants/styles';

export const TextFieldStyled = withStyles({
    root: {
        '& input': {
            fontFamily: defaultFontFamily,
            fontStyle: defaultFontStyle,
            fontWeight: defaultFontWeight,
            fontSize: '16px',
            lineHeight: '20px',
            color: primaryColor
        },
        '& label': {
            fontFamily: defaultFontFamily,
            fontStyle: defaultFontStyle,
            fontWeight: '500',
            fontSize: '12px',
            lineHeight: '15px',
            textTransform: 'uppercase'
        },
        '& placeholder': {
            color: 'brown'
        },
        '& label.Mui-focused': {
            color: `${primaryColor}`
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: `${primaryColor}`
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${formGrey3}`
        },
        '& .MuiInput-underline:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${formGrey3}`
        },
        width: '100%'
    }
})(TextField);

export const useStyles = makeStyles(() => ({
    error: {
        '& label.Mui-focused': {
            color: `${errorColor}`
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: `${errorColor}`
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${errorColor}`
        },
        '& .MuiInput-underline:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${errorColor}`
        }
    },
    untouched: {
        '& label.Mui-focused': {
            color: `${untouchedColor}`
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: `${untouchedColor}`
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${formGrey3}`
        },
        '& .MuiInput-underline:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${formGrey3}`
        }
    },
    success: {
        '& label.Mui-focused': {
            color: `${successColor}`
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: `${successColor}`
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${successColor}`
        },
        '& .MuiInput-underline:not(.Mui-disabled):before': {
            borderBottom: `2px solid ${successColor}`
        }
    }
}));
