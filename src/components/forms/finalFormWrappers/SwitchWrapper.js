import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'components/forms/inputs/Switch/Switch';


const SwitchWrapper = ({ input, ...rest }) => (
  <Switch
    {...input}
    {...rest}
  />
);

SwitchWrapper.propTypes = {
  input: PropTypes.shape({}).isRequired,
};

export default SwitchWrapper;
