import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import BaseButton from 'constants/ui/buttons/BaseButton';
import classes from './Button.module.scss';

const OutlinedButton = (
  { children, className, ...props },
) => (
  <BaseButton className={clsx(classes.outlinedButton, className)} {...props}>
    {children}
  </BaseButton>
);

OutlinedButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

OutlinedButton.defaultProps = {
  className: undefined,
};

export default OutlinedButton;
