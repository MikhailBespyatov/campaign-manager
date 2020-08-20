import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'reactstrap/es/Nav';
import TabContent from 'reactstrap/es/TabContent';
import TabPane from 'reactstrap/es/TabPane';
import StatNavItem from 'modules/CampaignManager/components/StatNavItem/StatNavItem';
import AreaChart from 'modules/CampaignManager/components/charts/AreaChart';
import classes from 'modules/CampaignManager/Dashboard/Dashboard.module.scss';


const DashboardComponent = ({ deltaStatistics, statistics, summary }) => {
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
    <div className={`${classes.contentWrapper} mt-4`}>
      <Nav tabs className={`${classes.tabsContainer} d-flex m-0`}>
        <StatNavItem
          tabId={1}
          activeTab={activeTab}
          onToggleTab={toggle}
          title="Views"
          value={summary.views}
          statDiff={deltaStatistics.viewsDelta}
        />
        <StatNavItem
          tabId={2}
          activeTab={activeTab}
          onToggleTab={toggle}
          title="Likes"
          value={summary.likes}
          statDiff={deltaStatistics.likesDelta}
        />
        <StatNavItem
          tabId={3}
          activeTab={activeTab}
          onToggleTab={toggle}
          title="Saves"
          value={summary.saves}
          statDiff={deltaStatistics.savesDelta}
        />
        <StatNavItem
          tabId={4}
          activeTab={activeTab}
          onToggleTab={toggle}
          title="Clicks"
          value={summary.clicks}
          statDiff={deltaStatistics.clicksDelta}
        />
        <StatNavItem
          tabId={5}
          activeTab={activeTab}
          onToggleTab={toggle}
          title="Buys"
          value={summary.buys}
          statDiff={deltaStatistics.buysDelta}
        />
      </Nav>
      <TabContent activeTab={activeTab} className="p-4">
        {statistics && (
          <>
            <TabPane tabId={1}>
              <AreaChart dataset={statistics.views} />
            </TabPane>
            <TabPane tabId={2}>
              <AreaChart dataset={statistics.likes} />
            </TabPane>
            <TabPane tabId={3}>
              <AreaChart dataset={statistics.saves} />
            </TabPane>
            <TabPane tabId={4}>
              <AreaChart dataset={statistics.clicks} />
            </TabPane>
            <TabPane tabId={5}>
              <AreaChart dataset={statistics.buys} />
            </TabPane>
          </>
        )}
      </TabContent>
    </div>
  );
};

DashboardComponent.propTypes = {
  deltaStatistics: PropTypes.shape({
    viewsDelta: PropTypes.number,
    likesDelta: PropTypes.number,
    savesDelta: PropTypes.number,
    clicksDelta: PropTypes.number,
    buysDelta: PropTypes.number,
  }),
  summary: PropTypes.shape({
    views: PropTypes.number,
    likes: PropTypes.number,
    saves: PropTypes.number,
    clicks: PropTypes.number,
    buys: PropTypes.number,
  }),
  statistics: PropTypes.shape({
    views: PropTypes.shape({}),
    likes: PropTypes.shape({}),
    saves: PropTypes.shape({}),
    clicks: PropTypes.shape({}),
    buys: PropTypes.shape({}),
  }),
};

DashboardComponent.defaultProps = {
  deltaStatistics: {
    viewsDelta: 0,
    likesDelta: 0,
    savesDelta: 0,
    clicksDelta: 0,
    buysDelta: 0,
  },
  summary: {},
  statistics: undefined,
};

export default DashboardComponent;
