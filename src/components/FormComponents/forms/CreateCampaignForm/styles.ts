import { formWrapperWidth } from 'components/FormComponents/forms/CreateCampaignForm/constants';
import { flexStart } from 'constants/styles/mixins';
import styled from 'styled-components';

export const FormWrapper = styled.form`
    //width: ${formWrapperWidth};
    width: 100%;
    ${flexStart};
    //align-items: baseline;
    flex-direction: column;
`;
