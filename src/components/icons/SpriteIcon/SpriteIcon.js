import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from 'components/icons/SpriteIcon/SpriteIcon.module.scss';


const SpriteIcon = ({
  className, name, size, ...props
}) => (
  <svg
    className={clsx(classes[size], className)}
    {...props}
  >
    <use xlinkHref={`#${name}`} />
  </svg>
);

SpriteIcon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'custom']),
};

SpriteIcon.defaultProps = {
  className: '',
  size: 'md',
};

export default SpriteIcon;
