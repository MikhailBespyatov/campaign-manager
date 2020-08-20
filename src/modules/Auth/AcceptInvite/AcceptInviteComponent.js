import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import TextInputWrapper from 'components/forms/finalFormWrappers/TextInputWrapper';
import CampaignAuthForm from 'modules/Auth/components/CampaignAuthForm/CampaignAuthForm';


const AcceptInviteComponent = ({ initialValues, validate, onSubmit }) => (
  <CampaignAuthForm
    formSubtitle="Add your invite code and provide your new password"
    initialValues={initialValues}
    validate={validate}
    onSubmit={onSubmit}
    submitBtnText="LOGIN"
  >
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

AcceptInviteComponent.propTypes = {
  initialValues: PropTypes.shape({}),
  validate: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

AcceptInviteComponent.defaultProps = {
  initialValues: undefined,
};

export default AcceptInviteComponent;
