import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import BaseButton from 'components/ui/buttons/BaseButton';
import classes from './Button.module.scss';

const TextButton = (
  { children, className, ...props },
) => (
  <BaseButton className={clsx(classes.textButton, className)} {...props}>
    {children}
  </BaseButton>
);

TextButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

TextButton.defaultProps = {
  className: undefined,
};

export default TextButton;
