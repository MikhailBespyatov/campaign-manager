import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SpriteIcon from 'components/icons/SpriteIcon/SpriteIcon';
import classes from 'components/ui/HashTag/HashTag.module.scss';


const HashTag = (
  {
    className,
    noMargin,
    title,
    onDelete,
    ...props
  },
) => (
  <div
    className={clsx(
      { 'mb-2': !noMargin },
      'd-flex align-items-center',
      classes.root,
      className,
    )}
  >
    <span>{`#${title}`}</span>
    {onDelete && (
      <SpriteIcon
        className="ml-2 cursor-pointer"
        name="remove-icon"
        size="sm"
        onClick={onDelete}
        {...props}
      />
    )}
  </div>
);

HashTag.propTypes = {
  className: PropTypes.string,
  noMargin: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

HashTag.defaultProps = {
  className: '',
  noMargin: false,
  onDelete: undefined,
};

export default HashTag;
