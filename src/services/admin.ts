import axios from './axios';

export const createOrganization = (data: WOM.CreateOrganizationRequest) =>
    axios<WOM.OrganizationResponse>({
        url: '/organization/create',
        data
    });
