import React from 'react';
import PropTypes from 'prop-types';
import Increment from 'components/forms/inputs/Increment/Increment';


const IncrementWrapper = ({ input, ...rest }) => (
  <Increment
    {...input}
    {...rest}
  />
);

IncrementWrapper.propTypes = {
  input: PropTypes.shape({}).isRequired,
};

export default IncrementWrapper;
