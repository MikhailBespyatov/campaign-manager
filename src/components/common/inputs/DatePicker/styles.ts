import { TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { dateInputHeight } from 'components/common/inputs/DatePicker/constants';
import { Span } from 'components/common/typography/Span';
import { ClickableWrapper } from 'components/grid/wrappers/ClicableWrapper';
import { defaultFontFamily, defaultFontSize, defaultFontStyle, defaultFontWeight } from 'constants/defaults';
import {
    errorColor,
    formGrey3,
    formTextStyleMixin,
    grey4,
    primaryColor,
    successColor,
    tertiaryBorderRadius,
    untouchedColor
} from 'constants/styles';
import styled from 'styled-components';

export const DataPickerWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CalendarButton = styled(ClickableWrapper)`
    width: '25px';
    height: auto;
`;

export const TextFieldForm = styled.input`
    outline: none;
    appearance: none;
    width: 100%;
    height: 70px;
    padding: 28px;
    ${formTextStyleMixin};
    border: 1px solid #c9c9c9;
    border-radius: ${tertiaryBorderRadius};
    background: none;
    ::-webkit-calendar-picker-indicator {
        opacity: 0;
        cursor: pointer;
    }
    z-index: 6;
`;

export const FakeDataPicker = styled.div`
    position: absolute;
    width: 50px;
    top: -10px;
    right: 22px;
    z-index: 10;
    opacity: 0;
`;

export const FakeBetweenDataPicker = styled.div`
    position: absolute;
    top: -35px;
    right: -15px;
    z-index: 10;
    opacity: 0;
`;

export const TextFieldBetweenForm = styled.input`
    outline: none;
    appearance: none;
    width: 100%;
    height: ${dateInputHeight};
    font-family: ${defaultFontFamily};
    font-style: ${defaultFontStyle};
    font-weight: 400;
    font-size: ${defaultFontSize};
    line-height: 17px;

    border: 0;
    background: none;

    ::-webkit-calendar-picker-indicator {
        opacity: 0;
        cursor: pointer;
    }
    z-index: 6;
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

export const TitleSpan = styled(Span)`
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;
    color: ${grey4};
`;
