import { StatusType } from 'types';

//Mock
export const campaignMock = [
    {
        title: 'Test Campaign',
        budget: { budgetTotal: 134 } as WOM.CampaignBudget,
        id: '12321sdfsd1123fds',
        schedule: { remainingDays: 1 } as WOM.CampaignSchedule,
        contentIds: ['23234', '3233242'],
        status: 'running' as StatusType
    },
    {
        title: 'Test Campaign 2',
        budget: { budgetTotal: 134 } as WOM.CampaignBudget,
        id: '12321sdfsdf123ds',
        schedule: { remainingDays: 1 } as WOM.CampaignSchedule,
        contentIds: ['23234', '3233242'],
        status: 'expired' as StatusType
    },
    {
        title: 'completed campaign',
        budget: { budgetTotal: 134 } as WOM.CampaignBudget,
        id: '12321sdfsd23fds',
        schedule: { remainingDays: 1 } as WOM.CampaignSchedule,
        contentIds: ['23234', '3233242'],
        status: 'completed' as StatusType
    },
    {
        title: 'Mock',
        budget: { budgetTotal: 134 } as WOM.CampaignBudget,
        id: '12321sdfsdf4234ds',
        schedule: { remainingDays: 1 } as WOM.CampaignSchedule,
        contentIds: ['23234', '3233242'],
        status: 'paused' as StatusType
    },
    {
        title: 'Paused',
        budget: { budgetTotal: 134 } as WOM.CampaignBudget,
        id: '12321sdf23232312asdasd4sdfds',
        schedule: { remainingDays: 1 } as WOM.CampaignSchedule,
        contentIds: ['23234', '3233242'],
        status: 'paused' as StatusType
    }
];
