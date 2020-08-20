import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from './Switch.module.scss';

const Switch = (
  {
    label, internalText, className, name,
    value, type, onChange, checked,
  },
) => (
  <label className={`${classes.label} d-flex flex-nowrap align-items-center justify-content-between py-1 ${className}`}>
    <span className="text-ellipsis mr-2">{label}</span>
    <input
      className="d-none"
      type={type}
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
    />
    <div
      className={clsx(
        'd-flex align-items-center px-1',
        classes.switch,
      )}
    >
      <span>{internalText}</span>
    </div>
  </label>
);

Switch.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  internalText: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['checkbox', 'radio']),
};

Switch.defaultProps = {
  className: '',
  label: '',
  internalText: '',
  type: 'checkbox',
};

export default Switch;
