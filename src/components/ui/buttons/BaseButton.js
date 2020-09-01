import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from './Button.module.scss';


const sizeToClass = {
  sm: classes.sm,
  md: classes.md,
};

const BaseButton = (
  {
    className,
    component: Component,
    children,
    inverted,
    inline,
    noPadding,
    size,
    square,
    ...rest
  },
) => (
  <Component
    className={
      clsx(
        classes.baseButton, className,
        sizeToClass[size],
        {
          [classes.inverted]: inverted,
          [classes.inline]: inline,
          [classes.noPadding]: noPadding,
        },
      )
    }
    {...rest}
  >
    {children}
  </Component>
);

BaseButton.propTypes = {
  children: PropTypes.node.isRequired,
  inverted: PropTypes.bool,
  inline: PropTypes.bool,
  noPadding: PropTypes.bool,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.shape({}), PropTypes.func]),
  size: PropTypes.oneOf(Object.keys(sizeToClass)),
  square: PropTypes.bool,
};

BaseButton.defaultProps = {
  className: '',
  component: 'button',
  inverted: false,
  inline: false,
  noPadding: false,
  square: false,
  size: 'md',
};

export default BaseButton;
