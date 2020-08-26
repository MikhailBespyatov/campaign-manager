import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routeByName from 'constants/routes';
import PaginationPanel from 'constants/ui/PaginationPanel/PaginationPanel';
import PrimaryButton from 'constants/ui/buttons/PrimaryButton';
import CampaignTable from 'modules/CampaignManager/Campaign/CampaignList/components/CampaignTable/CampaignTable';
import classes from 'modules/CampaignManager/Campaign/CampaignList/CampaignList.module.scss';

const CampaignListComponent = ({
  campaignsData,
  onClickRemove,
  onChangePage,
  currentPage,
  totalPages,
}) => (
  <div className="d-flex flex-column flex-fill">
    { campaignsData.length
      ? (
        <>
          <div className="overflow-auto">
            <CampaignTable
              campaignsData={campaignsData}
              onClickRemove={onClickRemove}
            />
          </div>
          <div className={classes.paginationPanel}>
            <PaginationPanel
              totalPages={totalPages}
              currentPage={currentPage}
              onChange={onChangePage}
            />
          </div>
        </>
      )
      : (
        <div className="flex-fill d-flex flex-column justify-content-center align-items-center">
          <div className={classes.info}>
            <h2 className="mb-2">No Campaigns</h2>
            <div className="h3 text-center mb-3">
              It looks like you haven`t created any Campaigns in this Ad Account yet
            </div>
            <div className={classes.btnCreateCampaign}>
              <PrimaryButton
                size="sm"
                component={Link}
                to={routeByName.campaignManager.campaign.create}
              >
                Create Campaign
              </PrimaryButton>
            </div>
          </div>
        </div>
      )}
  </div>
);


CampaignListComponent.propTypes = {
  campaignsData: PropTypes.arrayOf(PropTypes.shape({})),
  onClickRemove: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

CampaignListComponent.defaultProps = {
  campaignsData: [],
};

export default CampaignListComponent;
