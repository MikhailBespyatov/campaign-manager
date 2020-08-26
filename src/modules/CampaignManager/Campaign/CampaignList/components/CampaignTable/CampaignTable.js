import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import headConfig from 'modules/CampaignManager/Campaign/CampaignList/components/CampaignTable/headConfig';
import PrimaryButton from 'constants/ui/buttons/PrimaryButton';
import SpriteIcon from 'components/icons/SpriteIcon/SpriteIcon';
import OutlinedButton from 'constants/ui/buttons/OutlinedButton';
import classes from 'modules/CampaignManager/Campaign/CampaignList/components/CampaignTable/CampaignTable.module.scss';
import routeByName from 'constants/routes';
import DeltaValue from 'modules/CampaignManager/Campaign/DeltaValue/DeltaValue';


const CampaignTable = ({ campaignsData, onClickRemove }) => {
  const headRow = headConfig.map(({ label, name }) => (<td key={name}>{label}</td>));
  const bodyRow = campaignsData.map((row) => (
    (
      <tr key={row.id} valign="middle">
        <td className={classes.cell}>
          <div className={classes.title}>
            {row.title}
          </div>
        </td>
        <td className={classes.product}>
          <div className={classes.title}>
            Niterunner
          </div>
          <img src="https://via.placeholder.com/150" alt="Product" />
        </td>
        <td className={classes.cell}>
          <div className={classes.title}>
            {row.budget.amount}
          </div>
        </td>
        <td className={classes.cell}>
          <div className={classes.title}>
            {row.budget.spend}
          </div>
          <div className={classes.percent}>
            {`${
              row.budget.amount
                ? ((row.budget.spend / row.budget.amount) * 100).toFixed()
                : 0
            }%`}
          </div>
        </td>
        <td className={classes.cell}>
          <div className={classes.title}>
            {row.engagement.views}
          </div>
          <div className={classes.percent}>
            <DeltaValue value={row.deltaStatistics.viewsDelta} />
          </div>
        </td>
        <td className={classes.cell}>
          <div className={classes.title}>
            {row.engagement.likes}
          </div>
          <div className={classes.percent}>
            <span className="mr-1">{`${row.engagement.likesPercentage}%`}</span>
            <DeltaValue value={row.deltaStatistics.likesDelta} />
          </div>
        </td>
        <td className={classes.cell}>
          <div className={classes.title}>
            {row.engagement.saves}
          </div>
          <div className={classes.percent}>
            <span className="mr-1">{`${row.engagement.savesPercentage}%`}</span>
            <DeltaValue value={row.deltaStatistics.savesDelta} />
          </div>
        </td>
        <td className={classes.cell}>
          <div className={classes.title}>
            {row.engagement.clicks}
          </div>
          <div className={classes.percent}>
            <span className="mr-1">{`${row.engagement.clicksPercentage}%`}</span>
            <DeltaValue value={row.deltaStatistics.clicksDelta} />
          </div>
        </td>
        <td className={classes.cell}>
          <div className={classes.title}>
            {row.engagement.buys}
          </div>
          <div className={classes.percent}>
            <span className="mr-1">{`${row.engagement.buysPercentage}%`}</span>
            <DeltaValue value={row.deltaStatistics.buysDelta} />
          </div>
        </td>
        <td className={classes.actionsBtnWrapper}>
          <OutlinedButton
            className="mb-1 d-flex justify-content-center"
            size="sm"
            data-id={row.id}
            onClick={onClickRemove}
          >
            <SpriteIcon name="remove-icon" size="sm" className="mr-1" />
            Remove
          </OutlinedButton>
          <PrimaryButton
            size="sm"
            component={Link}
            to={routeByName.campaignManager.campaign.details(row.id)}
          >
            Details
          </PrimaryButton>
        </td>
      </tr>
    )
  ));

  return (
    <table className={classes.campaignTable}>
      <thead>
        <tr>
          {headRow}
        </tr>
      </thead>
      <tbody>
        {bodyRow}
      </tbody>
    </table>
  );
};

CampaignTable.propTypes = {
  campaignsData: PropTypes.arrayOf(PropTypes.shape({
    deltaStatistics: PropTypes.shape({}),
  })),
  onClickRemove: PropTypes.func.isRequired,
};

CampaignTable.defaultProps = {
  campaignsData: [],
};

export default CampaignTable;
