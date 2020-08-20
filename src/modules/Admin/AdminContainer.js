import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import routeByName from 'constants/routes';
import OrganizationContainer from 'modules/Admin/Organization/OrganizationContainer';
import UsersContainer from 'modules/Admin/Users/UsersContainer';
import NavBar from 'components/ui/NavBar/NavBar';
import { getNavLinksByRole } from 'modules/Admin/helpers';


const AdminContainer = ({ currentUser }) => {
  const navLinks = getNavLinksByRole(currentUser);

  return (
    <>
      <div className="mb-4">
        <NavBar linksConfig={navLinks} />
      </div>
      <div>
        <Switch>
          <Redirect
            exact
            from={routeByName.admin.index}
            to={navLinks[0].route}
          />
          <Route
            exact
            path={routeByName.admin.organization}
            component={OrganizationContainer}
          />
          <Route
            exact
            path={routeByName.admin.user}
            component={UsersContainer}
          />
        </Switch>
      </div>
    </>
  );
};

AdminContainer.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
  currentUser: PropTypes.shape({}).isRequired,
};

export default connect(
  ({ currentUser }) => ({ currentUser }),
)(AdminContainer);
