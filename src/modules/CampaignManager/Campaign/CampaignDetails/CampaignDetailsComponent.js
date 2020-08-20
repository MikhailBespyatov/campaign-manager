import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'reactstrap/es/Nav';
import TabContent from 'reactstrap/es/TabContent';
import TabPane from 'reactstrap/es/TabPane';
import { Link } from 'react-router-dom';
import routeByName from 'constants/routes';
import StatNavItem from 'modules/CampaignManager/components/StatNavItem/StatNavItem';
import LineChart from 'modules/CampaignManager/components/charts/LineChart';
import OutlinedButton from 'components/ui/buttons/OutlinedButton';
import classes from './CampaignDetails.module.scss';


const CampaignDetailsComponent = ({ campaign, statistics, campaignId }) => {
  const [activeTab, setActiveTab] = React.useState(1);

  const toggle = React.useCallback(
    (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    },
    [activeTab],
  );

  return (
    <>
      <div className="d-flex flex-row-reverse">
        <div className="pt-4">
          <OutlinedButton
            component={Link}
            to={routeByName.campaignManager.campaign.edit(campaignId)}
          >
            Edit Campaign
          </OutlinedButton>
        </div>
      </div>
      {statistics && (
        <div className={`${classes.contentWrapper} mt-4`}>
          <Nav tabs className={`${classes.tabsContainer} d-flex m-0`}>
            <StatNavItem
              tabId={1}
              activeTab={activeTab}
              onToggleTab={toggle}
              title="Views"
              value={campaign.engagement.views}
              statDiff={campaign.deltaStatistics.viewsDelta}
            />
            <StatNavItem
              tabId={2}
              activeTab={activeTab}
              onToggleTab={toggle}
              title="Likes"
              value={campaign.engagement.likes}
              statDiff={campaign.deltaStatistics.likesDelta}
            />
            <StatNavItem
              tabId={3}
              activeTab={activeTab}
              onToggleTab={toggle}
              title="Saves"
              value={campaign.engagement.saves}
              statDiff={campaign.deltaStatistics.savesDelta}
            />
            <StatNavItem
              tabId={4}
              activeTab={activeTab}
              onToggleTab={toggle}
              title="Clicks"
              value={campaign.engagement.clicks}
              statDiff={campaign.deltaStatistics.clicksDelta}
            />
            <StatNavItem
              tabId={5}
              activeTab={activeTab}
              onToggleTab={toggle}
              title="Buys"
              value={campaign.engagement.buys}
              statDiff={campaign.deltaStatistics.buysDelta}
            />
          </Nav>
          <TabContent activeTab={activeTab} className="p-4">
            {statistics && (
              <>
                <TabPane tabId={1}>
                  <LineChart dataset={statistics.views} />
                </TabPane>
                <TabPane tabId={2}>
                  <LineChart dataset={statistics.likes} />
                </TabPane>
                <TabPane tabId={3}>
                  <LineChart dataset={statistics.saves} />
                </TabPane>
                <TabPane tabId={4}>
                  <LineChart dataset={statistics.clicks} />
                </TabPane>
                <TabPane tabId={5}>
                  <LineChart dataset={statistics.buys} />
                </TabPane>
              </>
            )}
          </TabContent>
        </div>
      )}
    </>
  );
};

CampaignDetailsComponent.propTypes = {
  campaign: PropTypes.shape({
    engagement: PropTypes.shape({
      views: PropTypes.number,
      likes: PropTypes.number,
      saves: PropTypes.number,
      clicks: PropTypes.number,
      buys: PropTypes.number,
    }),
    deltaStatistics: PropTypes.shape({
      viewsDelta: PropTypes.number,
      likesDelta: PropTypes.number,
      savesDelta: PropTypes.number,
      clicksDelta: PropTypes.number,
      buysDelta: PropTypes.number,
    }),
  }),
  statistics: PropTypes.shape({
    views: PropTypes.shape({}),
    likes: PropTypes.shape({}),
    saves: PropTypes.shape({}),
    clicks: PropTypes.shape({}),
    buys: PropTypes.shape({}),
  }),
  campaignId: PropTypes.string.isRequired,
};

CampaignDetailsComponent.defaultProps = {
  campaign: undefined,
  statistics: undefined,
};

export default CampaignDetailsComponent;
