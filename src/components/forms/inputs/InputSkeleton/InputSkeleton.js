import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import HelperText from 'components/forms/inputs/HelperText/HelperText';
import classes from './InputSkeleton.module.scss';


class InputSkeleton extends PureComponent {
  onChangeWrapper = (event) => {
    const { maxLength, onChange } = this.props;
    const { target: { value } } = event;

    if (maxLength && value && maxLength < value.length) {
      return;
    }

    if (onChange) {
      onChange(event);
    }
  };

  maxLengthString() {
    const { maxLength, value } = this.props;

    if (!maxLength) {
      return null;
    }

    return (
      <HelperText message={`${value.length}/${maxLength}`} className="pt-1" />
    );
  }

  render() {
    const {
      label, helperText,
      hasError, value, prependContent, appendContent, className,
      noMargin, input, maxLength, onChange,
      // eslint-disable-next-line react/prop-types
      children,
      ...rest
    } = this.props;

    return (
      <div className={clsx(
        'w-100',
        {
          [classes.hasError]: hasError,
          'mb-3': !noMargin,
        },
      )}
      >
        {label
          ? <label className={`${classes.label} mb-1 font-semi-bold`}>{label}</label>
          : null}
        <div
          className={`${classes.inputWrapper} px-1 ${className}`}
        >
          {prependContent || null}
          {React.cloneElement(
            input,
            {
              ...rest,
              className: clsx(input.props.className, classes.input, { 'with-error': hasError }),
              value,
              onChange: this.onChangeWrapper,
            },
          )}
          {appendContent || null}
        </div>
        {this.maxLengthString()}
        {helperText && (
          <div className="pt-1">
            <HelperText isError={hasError} message={helperText} />
          </div>
        )}
      </div>
    );
  }
}

InputSkeleton.propTypes = {
  input: PropTypes.node.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  helperText: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  hasError: PropTypes.bool,
  noMargin: PropTypes.bool,
  maxLength: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  prependContent: PropTypes.node,
  appendContent: PropTypes.node,
  classes: PropTypes.shape({}),
};

InputSkeleton.defaultProps = {
  label: '',
  className: '',
  helperText: null,
  hasError: false,
  noMargin: false,
  maxLength: undefined,
  value: undefined,
  onChange: undefined,
  prependContent: null,
  appendContent: null,
  classes: {},
};

export default InputSkeleton;
