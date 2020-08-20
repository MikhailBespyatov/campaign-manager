import { getEndDateISO } from 'modules/CampaignManager/helpers';

export const createCampaignFormTransformer = (
  {
    title, contentIds, watchOverride,
    mustWatch, boostContentValue, boostCreatorValue,
    budgetAmount, startDate, dayAmount,
  },
) => ({
  title,
  contentIds,
  schedule: {
    utcToStart: new Date(startDate).toISOString(),
    utcToEnd: getEndDateISO(startDate, dayAmount),
  },
  settings: {
    watchOverride,
    mustWatch,
    boostContentValue,
    boostCreatorValue,
  },
  budget: {
    amount: budgetAmount,
  },
});
