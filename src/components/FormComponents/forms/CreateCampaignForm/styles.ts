import { formWrapperWidth } from 'components/FormComponents/forms/CreateCampaignForm/constants';
import { flexCenter } from 'constants/styles/mixins';
import styled from 'styled-components';

export const FormWrapper = styled.form`
    width: ${formWrapperWidth};
    ${flexCenter};
    flex-direction: column;
`;
