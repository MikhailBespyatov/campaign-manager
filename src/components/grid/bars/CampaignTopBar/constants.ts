import { Path, Status } from 'types';
import { routes } from 'constants/routes';

export interface RoutesArray extends Status, Path {
    name: string;
}

export const routesArray: RoutesArray[] = [
    {
        name: 'Running Campaigns',
        status: 'running',
        path: routes.campaignManager.campaign.running
    },
    {
        name: 'Paused Campaigns',
        status: 'paused',
        path: routes.campaignManager.campaign.paused
    },
    {
        name: 'Completed Campaigns',
        status: 'completed',
        path: routes.campaignManager.campaign.completed
    },
    {
        name: 'Expired Campaigns',
        status: 'expired',
        path: routes.campaignManager.campaign.expired
    },
    {
        name: 'Draft Campaigns',
        status: 'draft',
        path: routes.campaignManager.campaign.draft
    }
];
