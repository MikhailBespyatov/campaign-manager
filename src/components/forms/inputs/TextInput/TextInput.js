import React from 'react';
import * as PropTypes from 'prop-types';
import classes from 'components/forms/inputs/TextInput/TextInput.module.scss';
import InputSkeleton from 'components/forms/inputs/InputSkeleton/InputSkeleton';


const TextInput = (
  {
    type,
    placeholder,
    createRef,
    inputClassName,
    ...rest
  },
) => (
  <InputSkeleton
    input={(
      <input
        ref={createRef}
        className={`${classes.input} ${inputClassName}`}
        type={type}
        placeholder={placeholder}
      />
    )}
    {...rest}
  />
);

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  createRef: PropTypes.shape({}),
  inputClassName: PropTypes.string,
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
  value: undefined,
  createRef: undefined,
  inputClassName: undefined,
};

export default TextInput;
