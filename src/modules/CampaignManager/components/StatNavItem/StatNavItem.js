import React from 'react';
import PropTypes from 'prop-types';
import NavLink from 'reactstrap/es/NavLink';
import clsx from 'clsx';
import NavItem from 'reactstrap/es/NavItem';
import DeltaValue from 'modules/CampaignManager/Campaign/DeltaValue/DeltaValue';
import classes from './StatNavItem.module.scss';

class StatNavItem extends React.PureComponent {
  handleToggle = () => {
    const { tabId, onToggleTab } = this.props;
    onToggleTab(tabId);
  };

  render() {
    const {
      tabId, activeTab,
      title, value, statDiff,
    } = this.props;

    return (
      <NavItem className="flex-fill cursor-pointer">
        <NavLink
          className={clsx(
            classes.navLink,
            { [classes.active]: activeTab === tabId },
          )}
          onClick={this.handleToggle}
        >
          <div
            className="d-flex flex-column align-items-center"
          >
            <span className="font-semi-bold h3 mb-2">{title}</span>
            <span className="font-semi-bold mb-1">{value}</span>
            <DeltaValue value={statDiff} />
          </div>
        </NavLink>
      </NavItem>
    );
  }
}

StatNavItem.propTypes = {
  tabId: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
  onToggleTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  statDiff: PropTypes.number.isRequired,
};

StatNavItem.defaultProps = {
  value: undefined,
};

export default StatNavItem;
