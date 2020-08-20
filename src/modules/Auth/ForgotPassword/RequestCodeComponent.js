import React from 'react';
import PropTypes from 'prop-types';
import CampaignAuthForm from 'modules/Auth/components/CampaignAuthForm/CampaignAuthForm';
import TextInputWrapper from 'components/forms/finalFormWrappers/TextInputWrapper';
import { Field } from 'react-final-form';


const RequestCodeComponent = ({ validate, onSubmit }) => (
  <CampaignAuthForm
    formSubtitle="Request a security code to set a new password"
    validate={validate}
    onSubmit={onSubmit}
    submitBtnText="Request Code"
  >
    <Field
      name="email"
      label="Mail"
      type="email"
      inputClassName="text-center font-semi-bold"
      component={TextInputWrapper}
    />
  </CampaignAuthForm>
);

RequestCodeComponent.propTypes = {
  validate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RequestCodeComponent;
