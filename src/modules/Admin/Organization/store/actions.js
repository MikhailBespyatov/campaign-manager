import OrganizationService from 'modules/Admin/Organization/OrganizationService';
import { ORGANIZATION_SET_LIST, ORGANIZATION_UPDATE_ONE } from 'modules/Admin/Organization/store/constants';
import organizationsMock from 'modules/Admin/Organization/organizationsMock';

export const fetchOrganizationsAction = (pageIndex) => async (dispatch, getState) => {
  const {
    organization: { limit },
    currentUser: { userId },
  } = getState();

  const { totalPages, items: list } = await OrganizationService.getOrganizations({
    pageIndex,
    limit,
    userId,
  });

  dispatch({
    type: ORGANIZATION_SET_LIST,
    payload: { list, totalPages, pageIndex },
  });
};

export const deleteOrganizationHashTagAction = (organizationId, tag) => async (dispatch, getState) => {
  const { organization: { list } } = getState();
  const mandatoryTags = list[organizationId].mandatoryTags.filter((item) => item !== tag);
  // TODO: Uncomment this code, when backend issues will resolved
  // const updatedOrganization = await OrganizationService.updateOrganization({
  //   organizationId,
  //   mandatoryTags,
  // });

  const updatedOrganization = {
    ...list[organizationId],
    mandatoryTags,
  };

  dispatch({
    type: ORGANIZATION_UPDATE_ONE,
    payload: updatedOrganization,
  });
};

export const addOrganizationHashTagAction = (organizationId, tag) => async (dispatch, getState) => {
  const { organization: { list } } = getState();
  const mandatoryTags = [...list[organizationId].mandatoryTags, tag];
  // TODO: Uncomment this code, when backend issues will resolved
  // const updatedOrganization = await OrganizationService.updateOrganization({
  //   organizationId,
  //   mandatoryTags,
  // });

  const updatedOrganization = {
    ...list[organizationId],
    mandatoryTags,
  };

  dispatch({
    type: ORGANIZATION_UPDATE_ONE,
    payload: updatedOrganization,
  });
};

export const createOrganizationAction = (formValues) => async (dispatch) => {
  // const newOrganization = await OrganizationService.createOrganization(formValues);

  // TODO: Remove this mock, when backend will ready
  const { items } = organizationsMock;
  const tempOrg = {
    organizationId: items.length + 1,
    title: formValues.companyName,
    mandatoryTags: [formValues.mandatoryTag],
    wom: 1000000,
  };

  dispatch({
    type: ORGANIZATION_UPDATE_ONE,
    payload: tempOrg,
  });
};
