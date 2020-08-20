import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import routeByName from 'constants/routes';
import { isRouteEqual } from 'helpers/routes';
import RequestCodeComponent from 'modules/Auth/ForgotPassword/RequestCodeComponent';
import PasswordResetComponent from 'modules/Auth/ForgotPassword/PasswordResetComponent';
import requestCodeValidator from 'modules/Auth/ForgotPassword/requestCodeValidator';
import passwordResetValidator from 'modules/Auth/ForgotPassword/passwordResetValidator';
import { resetPasswordAction, sendSecurityCodeAction } from 'modules/Auth/store/actions';
import errorToastr from 'libs/toastr/errorToastr';
import successToastr from 'libs/toastr/successToastr';


const ForgotPasswordContainer = (
  {
    location: { pathname },
    history,
    sendSecurityCode,
    resetPassword,
  },
) => {
  const [passwordResetForm, setPasswordResetForm] = React.useState(null);
  React.useEffect(
    () => {
      if (!isRouteEqual(pathname, routeByName.forgotPassword.requestCode)) {
        return history.replace(routeByName.forgotPassword.requestCode);
      }
      return undefined;
    },
    [],
  );
  const sendCode = React.useCallback(
    async ({ email }) => {
      try {
        await sendSecurityCode(email);
        successToastr('Email with security code was sent successfully');
        setPasswordResetForm({ email });
        history.push(routeByName.forgotPassword.passwordReset);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  const resetPasswordAndLogin = React.useCallback(
    async (formValues) => {
      try {
        await resetPassword(formValues);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [],
  );

  return (
    <Switch>
      <Redirect
        exact
        from={routeByName.forgotPassword.index}
        to={routeByName.forgotPassword.requestCode}
      />
      <Route
        exact
        path={routeByName.forgotPassword.requestCode}
        render={(props) => (
          <RequestCodeComponent
            validate={requestCodeValidator}
            onSubmit={sendCode}
            {...props}
          />
        )}
      />
      <Route
        exact
        path={routeByName.forgotPassword.passwordReset}
        render={(props) => (
          <PasswordResetComponent
            initialValues={passwordResetForm}
            validate={passwordResetValidator}
            onSubmit={resetPasswordAndLogin}
            {...props}
          />
        )}
      />
    </Switch>
  );
};

ForgotPasswordContainer.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
  sendSecurityCode: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    sendSecurityCode: sendSecurityCodeAction,
    resetPassword: resetPasswordAction,
  },
)(ForgotPasswordContainer);
