import React from 'react';
import * as PropTypes from 'prop-types';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import routeByName from 'constants/routes';
import { connect } from 'react-redux';


const GuestRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      !token
        ? <Component {...props} />
        : <Redirect to={routeByName.home} />
    )}
  />
);

GuestRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    // This prop type is used for redux connected components
    PropTypes.shape({}),
  ]).isRequired,
  token: PropTypes.string,
};

GuestRoute.defaultProps = {
  token: null,
};

export default connect(
  ({ auth: { token } }) => ({ token }),
)(GuestRoute);
