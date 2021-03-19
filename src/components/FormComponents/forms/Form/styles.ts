import { CustomImg } from 'components/common/imageComponents/CustomImg';
import { H1 } from 'components/common/typography/titles/H';
import { P } from 'components/common/typography/titles/P';
import { formBorderRadius, formHorizontalPadding, formWidth } from 'components/FormComponents/forms/Form/constants';
import { formPrimaryColor, white } from 'constants/styles';
import { flexCenter } from 'constants/styles/mixins';
import styled from 'styled-components';
import { MarginBottom } from 'types';

export const Wrapper = styled.div`
    ${flexCenter};
    margin: auto;
    flex-direction: column;
    width: ${formWidth};
    border-radius: ${formBorderRadius};
    background-color: ${white};
    margin: auto;
    padding: 55px ${formHorizontalPadding} 38px;
    z-index: 2;
`;

export const FormWrapper = styled.form`
    width: 100%;
    ${flexCenter};
    flex-direction: column;
`;

export const CustomImgForm = styled(CustomImg)``;

export const H1Form = styled(H1)<MarginBottom>`
    font-weight: 700;
    font-size: 30px;
    line-height: 46px;
    color: ${formPrimaryColor};
    text-align: center;
    margin: 20px 0px ${({ marginBottom }) => marginBottom || '5px'};
`;

export const PForm = styled(P)`
    font-size: 16px;
    line-height: 20px;
    color: ${formPrimaryColor};
    text-align: center;
    margin-bottom: 35px;
`;
