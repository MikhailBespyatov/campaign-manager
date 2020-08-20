import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignInComponent from 'modules/Auth/SignIn/SignInComponent';
import { signInAction } from 'modules/Auth/store/actions';
import errorToastr from 'libs/toastr/errorToastr';

const SignInContainer = ({ signIn }) => {
  const onSubmit = useCallback(
    async (formValues) => {
      try {
        await signIn(formValues);
      } catch (e) {
        errorToastr(e.message);
        return {
          ...e.validationErrors,
        };
      }
      return undefined;
    },
    [],
  );

  return (
    <SignInComponent onSubmit={onSubmit} />
  );
};

SignInContainer.propTypes = {
  signIn: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  { signIn: signInAction },
)(SignInContainer);
