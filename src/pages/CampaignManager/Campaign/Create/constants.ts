import { ProgressBarItemInterface } from 'types';
import { Budget, CampaignName, Dates, Videos } from './Steps';

export const createCampaignSteps: ProgressBarItemInterface[] = [
    {
        title: 'Campaign Name',
        component: CampaignName,
        isValidField: 'campaignName'
    },
    // {
    //     title: 'Channels',
    //     component: Channels,
    //     isValidField: 'campaignName'
    // },
    {
        title: 'Videos',
        component: Videos,
        isValidField: 'videos'
    },
    // {
    //     title: 'Configuration',
    //     component: Configuration,
    //     isValidField: 'videos'
    // },
    {
        title: 'Dates',
        component: Dates,
        isValidField: 'dateTo'
    },
    {
        title: 'Budget',
        component: Budget,
        isValidField: 'budget'
    }
];
