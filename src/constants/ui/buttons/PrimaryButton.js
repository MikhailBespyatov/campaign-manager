import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import BaseButton from 'constants/ui/buttons/BaseButton';
import classes from './Button.module.scss';

const PrimaryButton = (
  { children, className, ...props },
) => (
  <BaseButton className={clsx(classes.primaryButton, className)} {...props}>
    {children}
  </BaseButton>
);

PrimaryButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PrimaryButton.defaultProps = {
  className: undefined,
};

export default PrimaryButton;
