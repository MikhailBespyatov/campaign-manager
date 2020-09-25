import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    errorSpanHeight,
    errorSpanMarginBottom,
    inputFontSize
} from 'components/FormComponents/inputs/WomInput/constants';
import { defaultFontFamily, defaultFontStyle } from 'constants/defaults';
import { errorColor, formGrey3, primaryColor, successColor, untouchedColor } from 'constants/styles';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
`;

export const ErrorSpan = styled.span`
    min-height: ${errorSpanHeight};
    min-width: 1px;
    color: ${errorColor};
    margin-bottom: ${errorSpanMarginBottom};
    display: flex;
`;

export const TextFieldStyled = withStyles({
    root: {
        '& input': {
            fontFamily: defaultFontFamily,
            fontStyle: defaultFontStyle,
            // fontWeight: 'bold',
            // fontSize: '40px',
            // lineHeight: '48px',
            fontWeight: 'normal',
            fontSize: inputFontSize,
            lineHeight: '38px',
            color: primaryColor,
            textAlign: 'center'
        },
        '& label': {
            fontFamily: defaultFontFamily,
            fontStyle: defaultFontStyle,
            fontWeight: 'normal',
            fontSize: inputFontSize,
            lineHeight: '38px',
            color: primaryColor,
            textTransform: 'uppercase',
            zIndex: 9
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
