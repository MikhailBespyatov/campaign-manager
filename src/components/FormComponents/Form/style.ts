import { CustomImg } from 'components/common/ImageComponents/CustomImg';
import { P } from 'components/common/TextComponents/P';
import { H1 } from 'components/common/titles/H';
import {
    formBorderRadius,
    formHorizontalPadding,
    formVerticalPadding,
    formWidth
} from 'components/FormComponents/Form/constants';
import { flexCenter } from 'constants/styles/mixins';
import styled from 'styled-components';
import { formPrimaryColor, white } from '../../../constants';

export const Wrapper = styled.div`
    ${flexCenter};
    margin: auto;
    flex-direction: column;
    width: ${formWidth};
    padding: ${formVerticalPadding} ${formHorizontalPadding};
    background-color: ${white};
    border-radius: ${formBorderRadius};
    z-index: 2;
    margin: auto;
`;

export const FormWrapper = styled.form`
    width: 100%;
    ${flexCenter};
    flex-direction: column;
`;

export const CustomImgForm = styled(CustomImg)``;

export const H1Form = styled(H1)`
    margin-top: 36px;
    margin-bottom: 17px;
    color: ${formPrimaryColor};
`;

export const PForm = styled(P)`
    margin-bottom: 46px;
    color: ${formPrimaryColor};
`;
