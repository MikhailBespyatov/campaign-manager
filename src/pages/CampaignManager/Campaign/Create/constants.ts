import { ProgressBarItemInterface } from 'types';
import { CampaignName, Channels, Configuration, Videos, Dates, Budget } from './Steps';

export const createCampaignSteps: ProgressBarItemInterface[] = [
    {
        title: 'Campaign Name',
        component: CampaignName,
        isValidField: 'campaignName'
    },
    {
        title: 'Channels',
        component: Channels,
        isValidField: 'channels'
    },
    {
        title: 'Videos',
        component: Videos,
        isValidField: 'videos'
    },
    {
        title: 'Configuration',
        component: Configuration,
        isValidField: 'videos'
    },
    {
        title: 'Dates',
        component: Dates,
        isValidField: 'videos'
    },
    {
        title: 'Budget',
        component: Budget,
        isValidField: 'videos'
    }
];
