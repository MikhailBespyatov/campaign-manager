import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { H1 } from 'components/common/typography/titles/H';
import { P } from 'components/common/typography/titles/P';
import {
    formBorderRadius,
    formHorizontalPadding,
    formPaddingBottom,
    formVerticalPadding,
    formWidth
} from 'components/FormComponents/Form/constants';
import { formPrimaryColor, white } from 'constants/styles';
import { flexCenter } from 'constants/styles/mixins';
import styled from 'styled-components';

export const Wrapper = styled.div`
    ${flexCenter};
    margin: auto;
    flex-direction: column;
    width: ${formWidth};
    border-radius: ${formBorderRadius};
    background-color: ${white};
    margin: auto;
    padding: ${formVerticalPadding} ${formHorizontalPadding};
    padding-bottom: ${formPaddingBottom};
    z-index: 2;
`;

export const FormWrapper = styled.form`
    width: 100%;
    ${flexCenter};
    flex-direction: column;
`;

export const CustomImgForm = styled(CustomImg)``;

export const H1Form = styled(H1)`
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
    color: ${formPrimaryColor};
    text-align: center;
    margin-top: 20px;
    margin-bottom: 5px;
`;

export const PForm = styled(P)`
    font-size: 16px;
    line-height: 20px;
    color: ${formPrimaryColor};
    text-align: center;
    margin-bottom: 35px;
`;
