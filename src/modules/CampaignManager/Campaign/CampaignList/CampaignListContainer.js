import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCampaignsForPageAction } from 'modules/CampaignManager/Campaign/store/actions';
import CampaignListComponent from 'modules/CampaignManager/Campaign/CampaignList/CampaignListComponent';
import errorToastr from 'libs/toastr/errorToastr';

const CampaignListContainer = (
  {
    currentPage, totalPages, list, listPerPage,
    getCampaignsForPage, daySelectValue,
  },
) => {
  const getCampaignsForPageInternal = React.useCallback(
    async (pageParam) => {
      const page = typeof pageParam === 'number' ? pageParam : currentPage;
      try {
        await getCampaignsForPage(page, daySelectValue);
      } catch (e) {
        errorToastr(e.message);
      }
    },
    [daySelectValue],
  );

  React.useEffect(() => {
    getCampaignsForPageInternal();
  }, [daySelectValue]);

  const handleChangePage = React.useCallback((pageIndex) => {
    getCampaignsForPageInternal(pageIndex);
  }, []);

  const onClickRemove = React.useCallback(({ currentTarget }) => {
    const id = Number.parseInt(currentTarget.getAttribute('data-id'), 10);
    console.log('Remove', id);
  }, []);

  const getPageList = React.useCallback(
    () => {
      if (listPerPage[currentPage]) {
        return listPerPage[currentPage].map((campaignId) => list[campaignId]);
      }
      return [];
    },
    [list, listPerPage],
  );

  return (
    <CampaignListComponent
      campaignsData={getPageList()}
      onClickRemove={onClickRemove}
      onChangePage={handleChangePage}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  );
};

CampaignListContainer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  list: PropTypes.shape({}).isRequired,
  listPerPage: PropTypes.shape({}).isRequired,
  statInfo: PropTypes.shape({}).isRequired,
  daySelectValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  getCampaignsForPage: PropTypes.func.isRequired,
};

export default connect(
  (
    {
      campaign,
      layout: { daySelectValue },
    },
  ) => ({
    ...campaign,
    daySelectValue,
  }),
  { getCampaignsForPage: getCampaignsForPageAction },
)(CampaignListContainer);
