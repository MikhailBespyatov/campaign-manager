import React, {} from 'react';
import * as PropTypes from 'prop-types';
import InputSkeleton from 'components/forms/inputs/InputSkeleton/InputSkeleton';
import clsx from 'clsx';
import textInputClasses from 'components/forms/inputs/TextInput/TextInput.module.scss';
import SpriteIcon from 'components/icons/SpriteIcon/SpriteIcon';
import classes from './SelectInput.module.scss';

const SelectInput = (
  {
    outlined,
    disabled,
    value: valueProp,
    options,
    onChange,
    ...rest
  },
) => (
  <InputSkeleton
    className={clsx(
      {
        [classes.outlined]: outlined,
        [classes.disabled]: disabled,
      },
      'px-2',
    )}
    input={(
      <select
        className={clsx(
          'pr-2',
          classes.selectInput,
          textInputClasses.input,
        )}
        readOnly={!onChange}
        disabled={disabled}
      >
        {options.map(({ title, value }) => (
          <option value={value} key={value}>
            {title}
          </option>
        ))}
      </select>
      )}
    appendContent={(
      <SpriteIcon name="arrow-down-v2" size="sm" className={classes.arrow} />
      )}
    value={valueProp}
    onChange={onChange}
    {...rest}
  />
);

SelectInput.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
};

SelectInput.defaultProps = {
  onChange: undefined,
  options: [],
  value: '',
  disabled: false,
  outlined: false,
};

export default SelectInput;
