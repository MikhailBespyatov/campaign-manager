import React from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from 'components/forms/inputs/HelperText/HelperText.module.scss';


const HelperText = ({ message, isError, className }) => {
  let messageList = message;

  if (!Array.isArray(message)) {
    messageList = [message];
  }

  return messageList.map(
    (item) => (
      <div
        key={`helperText-${message}`}
        className={clsx(
          'font-semi-bold',
          classes.root,
          className,
          { [classes.error]: isError },
        )}
      >
        {item}
      </div>
    ),
  );
};

HelperText.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  className: PropTypes.string,
};

HelperText.defaultProps = {
  className: undefined,
};

export default HelperText;
