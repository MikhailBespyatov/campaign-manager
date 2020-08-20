import React from 'react';
import { Route, Switch } from 'react-router';
import routeByName from 'constants/routes';
import VideoListContainer from 'modules/CampaignManager/Discover/VideoList/VideoListContainer';
import VideoDetailsContainer from 'modules/CampaignManager/Discover/VideoDetails/VideoDetailsContainer';


const DiscoverContainer = () => (
  <Switch>
    <Route
      exact
      path={routeByName.campaignManager.discover.list}
      component={VideoListContainer}
    />
    <Route
      exact
      path={routeByName.campaignManager.discover.details()}
      component={VideoDetailsContainer}
    />
  </Switch>
);

export default DiscoverContainer;
