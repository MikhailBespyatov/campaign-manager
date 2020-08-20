import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from './BitmapIcon.module.scss';


const BitmapIcon = ({ className, size, src }) => (
  <div
    className={clsx(
      classes.iconContainer,
      classes[size],
      className,
    )}
  >
    <img alt="" src={src} />
  </div>
);

BitmapIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['md', 'lg', 'xl', 'custom']),
  src: PropTypes.string.isRequired,
};

BitmapIcon.defaultProps = {
  className: '',
  size: 'md',
};

export default BitmapIcon;
