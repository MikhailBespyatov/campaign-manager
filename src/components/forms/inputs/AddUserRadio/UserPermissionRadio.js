import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from 'components/forms/inputs/AddUserRadio/UserPermissionRadio.module.scss';

const UserPermissionRadio = ({ label, value, onChange }) => {

  const handleChange = React.useCallback(
    ({ currentTarget }) => {
      onChange(currentTarget.getAttribute('data-value'));
    },
    [],
  );

  return (
    <div className="mb-4">
      <label className={`${classes.label} mb-1 font-semi-bold`}>{label}</label>
      <div className="d-flex justify-content-center">
        <div
          data-value="1"
          onClick={handleChange}
          className={clsx(
            classes.radio,
            'text-center font-semi-bold cursor-pointer mr-2',
            { [classes.checked]: value === '1' },
          )}
        >
          No
        </div>
        <div
          data-value="2"
          onClick={handleChange}
          className={clsx(
            classes.radio,
            'text-center font-semi-bold cursor-pointer',
            { [classes.checked]: value === '2' },
          )}
        >
          Yes
        </div>
      </div>
    </div>
  );
};

UserPermissionRadio.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default UserPermissionRadio;
