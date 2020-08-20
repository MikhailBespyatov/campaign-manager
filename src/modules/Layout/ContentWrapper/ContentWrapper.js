import React from 'react';
import PropTypes from 'prop-types';
import classes from './ContentWrapper.module.scss';


const ContentWrapper = ({ children }) => (
  <div className={`${classes.root} d-flex flex-column flex-fill p-4 mx-4 mb-5`}>
    {children}
  </div>
);

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentWrapper;
