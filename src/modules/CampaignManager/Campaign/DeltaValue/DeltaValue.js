import React from 'react';
import PropTypes from 'prop-types';
import classes from './DeltaValue.module.scss';

const DeltaValue = ({ value }) => value !== 0 ? (
  <span
    className={
      value > 0
        ? classes.grow
        : classes.fall
    }
  >
    {`${value}%`}
  </span>
) : null;

DeltaValue.propTypes = {
  value: PropTypes.number.isRequired,
};

export default DeltaValue;
