import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import routeByName from 'constants/routes';
import { hasAdminPermission } from 'helpers/routes';


const RoleRedirect = ({ isAdmin }) => (
  <Redirect
    to={
      isAdmin
        ? routeByName.admin.index
        : routeByName.campaignManager.index
    }
  />
);

RoleRedirect.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default connect(
  ({ currentUser }) => ({ isAdmin: hasAdminPermission(currentUser) }),
)(RoleRedirect);
