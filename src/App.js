import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import ReduxToastr from 'react-redux-toastr/lib/ReduxToastr';
import routeByName from 'constants/routes';
import { initAppAction } from 'modules/App/store/actions';
import { setUpAuthInterceptorsAction } from 'libs/axiosInstances/AuthorizedAxiosInstance';
import WelcomeScreen from 'components/staticPages/WelcomeScreen/WelcomeScreen';
import GuestRoute from 'routing/GuestRoute';
import SignInContainer from 'modules/Auth/SignIn/SignInContainer';
import UnderConstruction from 'components/staticPages/UnderConstruction';
import PrivateRoute from 'routing/PrivateRoute';
import AdminContainer from 'modules/Admin/AdminContainer';
import BaseLayout from 'modules/Layout/BaseLayout';
import RoleRedirect from 'routing/RoleRedirect';
import ForgotPasswordContainer from 'modules/Auth/ForgotPassword/ForgotPasswordContainer';
import AcceptInviteContainer from 'modules/Auth/AcceptInvite/AcceptInviteContainer';
import CampaignManagerContainer from 'modules/CampaignManager/CampaignManagerContainer';


class App extends PureComponent {
  constructor(props) {
    super(props);
    props.setUpAuthInterceptors();
  }

  componentDidMount() {
    const { initApp, inited } = this.props;
    if (inited) {
      return;
    }
    (async () => {
      await initApp();
    })();
  }

  render() {
    const { inited } = this.props;

    if (!inited) {
      return <WelcomeScreen />;
    }

    return (
      <>
        <BaseLayout>
          <Switch>
            <GuestRoute exact path={routeByName.signIn} component={SignInContainer} />
            <GuestRoute exact path={routeByName.signUp} component={UnderConstruction} />
            <GuestRoute exact path={routeByName.acceptInvite} component={AcceptInviteContainer} />
            <GuestRoute path={routeByName.forgotPassword.index} component={ForgotPasswordContainer} />
            <PrivateRoute exact path={routeByName.home} component={RoleRedirect} />
            <PrivateRoute exact path={routeByName.static.privacy} component={UnderConstruction} />
            <PrivateRoute exact path={routeByName.static.press} component={UnderConstruction} />
            <PrivateRoute path={routeByName.campaignManager.index} component={CampaignManagerContainer} />
            <PrivateRoute
              needAdminPermission
              path={routeByName.admin.index}
              component={AdminContainer}
            />
            <Route path="*" render={() => ('404')} />
          </Switch>
        </BaseLayout>
        <ReduxToastr
          position="top-right"
          timeOut={4000}
          newestOnTop={false}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          preventDuplicates
          closeOnToastrClick
        />
      </>
    );
  }
}

App.propTypes = {
  initApp: PropTypes.func.isRequired,
  setUpAuthInterceptors: PropTypes.func.isRequired,
  inited: PropTypes.bool.isRequired,
};

export default connect(
  ({ app: { inited } }) => ({ inited }),
  {
    initApp: initAppAction,
    setUpAuthInterceptors: setUpAuthInterceptorsAction,
  },
)(App);
