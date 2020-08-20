import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import routeByName from 'constants/routes';
import { hasAdminPermission } from 'helpers/routes';


const PrivateRoute = (
  {
    needAdminPermission,
    currentUser,
    component: Component,
    authenticated,
    ...rest
  },
) => (
  <Route
    {...rest}
    render={(props) => {
      if (!authenticated) {
        return (<Redirect to={routeByName.signIn} />);
      }
      // TODO: Rework role & permission system in future
      if (needAdminPermission && !hasAdminPermission(currentUser)) {
        return (<Redirect to={routeByName.home} />);
      }
      return <Component {...props} />;
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    // This prop type is used for redux connected components
    PropTypes.shape({}),
  ]).isRequired,
  needAdminPermission: PropTypes.bool,
  currentUser: PropTypes.shape({}),
  authenticated: PropTypes.bool.isRequired,
};

PrivateRoute.defaultProps = {
  currentUser: null,
  needAdminPermission: false,
};

export default connect(
  ({ currentUser }) => ({
    currentUser,
    authenticated: Boolean(currentUser),
  }),
)(PrivateRoute);
