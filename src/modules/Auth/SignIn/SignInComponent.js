import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import routeByName from 'constants/routes';
import CampaignAuthForm from 'modules/Auth/components/CampaignAuthForm/CampaignAuthForm';
import signInValidator from 'modules/Auth/SignIn/signInValidator';
import TextInputWrapper from 'components/forms/finalFormWrappers/TextInputWrapper';
import TextButton from 'components/ui/buttons/TextButton';


const SignInComponent = ({ onSubmit }) => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  useEffect(
    () => {
      emailInputRef.current.focus();
    },
    [],
  );

  const keyDown = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        passwordInputRef.current.focus();
      }
    },
    [],
  );

  return (
    <CampaignAuthForm
      formSubtitle="to discover & manage WOM Content"
      validate={signInValidator}
      onSubmit={onSubmit}
      submitBtnText="LOGIN"
    >
      <Field
        name="email"
        label="Mail"
        type="email"
        createRef={emailInputRef}
        onKeyDown={keyDown}
        component={TextInputWrapper}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        createRef={passwordInputRef}
        component={TextInputWrapper}
        noMargin
      />
      <div className="text-right pt-1 pb-2">
        <TextButton
          inline
          noPadding
          component={Link}
          to={routeByName.forgotPassword.requestCode}
        >
          Forgot password?
        </TextButton>
      </div>
    </CampaignAuthForm>
  );
};

SignInComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignInComponent;
