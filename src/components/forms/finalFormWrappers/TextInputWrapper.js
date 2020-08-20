import React, { useMemo } from 'react';
import * as PropTypes from 'prop-types';
import TextInput from 'components/forms/inputs/TextInput/TextInput';

const TextInputWrapper = (
  {
    helperText,
    input,
    meta: {
      submitError, dirtySinceLastSubmit, touched,
      error, submitting,
    },
    ...rest
  },
) => {
  const showError = ((submitError && !dirtySinceLastSubmit) || error) && touched && !submitting;

  const getHelperText = useMemo(
    () => {
      if (!showError) return helperText;

      return error || submitError;
    },
    [showError, error, submitError, helperText],
  );

  return (
    <TextInput
      helperText={getHelperText}
      hasError={showError}
      {...input}
      {...rest}
    />
  );
};

TextInputWrapper.propTypes = {
  helperText: PropTypes.string,
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({
    submitError: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    dirtySinceLastSubmit: PropTypes.bool,
    touched: PropTypes.bool,
    submitting: PropTypes.bool,
    error: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
  }).isRequired,
};

TextInputWrapper.defaultProps = {
  helperText: null,
};

export default TextInputWrapper;
