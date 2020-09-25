import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    disabledColor,
    errorSpanHeight,
    errorSpanMarginBottom,
    inputBackground,
    inputWrapperBorderRadius,
    inputWrapperHeight,
    inputWrapperMarginBottom,
    inputWrapperVerticalPadding,
    inputWrapperWidth,
    labelColor,
    labelFontSize,
    labelFontWeight,
    labelLineHeight,
    labelMarginBottom
} from 'components/FormComponents/inputs/TextInput/constants';
import { InputWrapperProps } from 'components/FormComponents/inputs/TextInput/types';
import { defaultFontFamily, defaultFontStyle, defaultFontWeight } from 'constants/defaults';
import {
    black,
    borderWidth,
    errorColor,
    formGrey3,
    formTextStyleMixin,
    primaryColor,
    successColor,
    untouchedColor
} from 'constants/styles';
import styled from 'styled-components';
import { WithError } from 'types';

export const Wrapper = styled.div`
    width: 100%;
`;

export const StyledInput = styled.input`
    width: 100%;
    padding: spacing(2);
    border: none;
    background: transparent;
    &::placeholder {
        font-weight: normal;
        color: ${black};
        opacity: 1;
    }
`;

export const InputWrapper = styled.div<InputWrapperProps>`
    position: relative;
    display: flex;
    align-items: center;
    border: ${borderWidth} solid ${({ error }) => (error ? errorColor : successColor)};
    ${({ touched }) => (!touched ? `border-color: ${untouchedColor};` : ``)};
    background-color: ${inputBackground};
    ${({ disabled }) => (disabled ? `background-color: ${disabledColor}; border-color: ${disabledColor};` : ``)};
    border-radius: ${inputWrapperBorderRadius};
    overflow: hidden;
    width: ${inputWrapperWidth};
    height: ${inputWrapperHeight};
    margin-bottom: ${inputWrapperMarginBottom};
    padding-left: ${inputWrapperVerticalPadding};
    padding-right: ${inputWrapperVerticalPadding};
`;

export const Label = styled.label<WithError>`
    display: block;
    color: ${({ error }) => (error ? errorColor : labelColor)};
    // font-family: Montserrat;
    // font-style: normal;
    // font-weight: ${labelFontWeight};
    // font-size: ${labelFontSize};
    // line-height: ${labelLineHeight};
    ${formTextStyleMixin};
    margin-bottom: ${labelMarginBottom};
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
