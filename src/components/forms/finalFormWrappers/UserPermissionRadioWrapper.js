import React from 'react';
import * as PropTypes from 'prop-types';
import UserPermissionRadio from 'components/forms/inputs/AddUserRadio/UserPermissionRadio';


const UserPermissionRadioWrapper = (
  {
    input,
    ...rest
  },
) => (
  <UserPermissionRadio
    {...input}
    {...rest}
  />
);

UserPermissionRadioWrapper.propTypes = {
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({
    submitError: PropTypes.arrayOf(PropTypes.string),
    dirtySinceLastSubmit: PropTypes.bool,
    touched: PropTypes.bool,
    submitting: PropTypes.bool,
    error: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default UserPermissionRadioWrapper;
