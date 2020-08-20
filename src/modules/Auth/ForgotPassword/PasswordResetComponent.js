import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import TextInputWrapper from 'components/forms/finalFormWrappers/TextInputWrapper';
import CampaignAuthForm from 'modules/Auth/components/CampaignAuthForm/CampaignAuthForm';


const PasswordResetComponent = ({ initialValues, validate, onSubmit }) => (
  <CampaignAuthForm
    formSubtitle="Add your security code and provide your new password"
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}
    submitBtnText="LOGIN"
  >
    <Field
      name="email"
      label="Mail"
      type="email"
      readOnly
      component={TextInputWrapper}
    />
    <Field
      name="confirmationToken"
      label="Security Code"
      component={TextInputWrapper}
    />
    <Field
      name="password"
      label="Password"
      type="password"
      component={TextInputWrapper}
    />
    <Field
      name="confirmPassword"
      label="Password Repeat"
      type="password"
      component={TextInputWrapper}
      noMargin
    />
  </CampaignAuthForm>
);

PasswordResetComponent.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  validate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PasswordResetComponent;
