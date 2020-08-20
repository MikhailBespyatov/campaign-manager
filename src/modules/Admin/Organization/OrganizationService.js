import AuthorizedAxiosInstance from 'libs/axiosInstances/AuthorizedAxiosInstance';
import organizationsMock from 'modules/Admin/Organization/organizationsMock';
import { organizationsListTransformer } from 'modules/Admin/Organization/transformers';

const urlPrefix = '';

const OrganizationService = {
  getTags(query, existingTags) {
    const existingTagsMap = existingTags
      .reduce((accum, item) => ({
        ...accum,
        [item]: item,
      }), {});

    return AuthorizedAxiosInstance
      .post(
        `${urlPrefix}/organization/get-tags`,
        { organizationId: '5ddbdd2efd92595cf6d94dc1' },
      )
      .then(({ discoveryTags }) => {
        // At the moment backend doesn't have options to filter tags.
        // Remove this filter in the future
        const filteredByBackend = discoveryTags.filter((item) => {
          const lowerCaseItem = item.toLowerCase();
          const lowerCaseQuery = query.toLowerCase();
          return lowerCaseItem.includes(lowerCaseQuery);
        });

        return filteredByBackend.filter((tag) => !existingTagsMap[tag]);
      });
  },

  getOrganizations(params) {
    // return AuthorizedAxiosInstance.post(
    //   `${urlPrefix}/organization/query`,
    //   {
    //     ...params,
    //     returnQueryCount: true,
    //   },
    // );

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...organizationsMock,
          items: organizationsListTransformer(organizationsMock.items),
        });
      }, 200);
    });
  },

  getOrganizationById(organizationId) {
    return AuthorizedAxiosInstance.post(
      `${urlPrefix}/organization/get`,
      { organizationId },
    );
  },

  updateOrganization(organization) {
    return AuthorizedAxiosInstance.post(
      `${urlPrefix}/organization/update`,
      organization,
    );
  },

  createOrganization(organization) {
    return AuthorizedAxiosInstance.post(
      `${urlPrefix}/organization/create`,
      organization,
    );
  },
};

export default OrganizationService;
