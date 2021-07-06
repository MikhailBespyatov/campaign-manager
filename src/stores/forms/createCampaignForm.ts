import { createRule, yupDefault, yupDefaultArray } from 'constants/yupFields';
import { createEvent, forward, sample } from 'effector';
import { createForm } from 'effector-forms';
import { nanoid } from 'nanoid';
import { createCampaignEvents } from 'stores/createCampaignSteps';
import { walletStores } from 'stores/wallet';
import { getDateBeforeAndReturnISO, getOrganizationId } from 'utils/usefulFunctions';

export const createCampaignForm = createForm({
    fields: {
        id: {
            init: nanoid()
        },
        campaignName: {
            init: '',
            validateOn: ['change'],
            rules: [
                createRule<string>({
                    name: 'campaignName',
                    schema: yupDefault
                })
            ]
        },
        channels: {
            init: [] as string[]
            // validateOn: ['change'],
            // rules: [
            //     createRule<string[]>({
            //         name: 'channels',
            //         schema: yupDefaultArray
            //     })
            // ]
        },
        videos: {
            init: [] as WOM.ContentItemResponse[],
            validateOn: ['change'],
            rules: [
                createRule<WOM.ContentItemResponse[]>({
                    name: 'videos',
                    schema: yupDefaultArray
                })
            ]
        },
        age: {
            init: [] as number[],
            validateOn: ['change'],
            rules: [
                createRule<number[]>({
                    name: 'age',
                    schema: yupDefaultArray
                })
            ]
        },
        locale: {
            init: [] as number[],
            validateOn: ['change'],
            rules: [
                createRule<number[]>({
                    name: 'locale',
                    schema: yupDefaultArray
                })
            ]
        },
        hashtags: {
            init: [] as Array<{ hashtag: string; bias: string }>,
            validateOn: ['change'],
            rules: [
                createRule<Array<{ hashtag: string; bias: string }>>({
                    name: 'hashtags',
                    schema: yupDefaultArray
                })
            ]
        },
        overrides: {
            //any - because it is MOCK data
            init: { override: '2', boostVideo: '2', boostCreator: '2', mustWatch: false } as { [key: string]: any },
            validateOn: ['change']
        },
        dateFrom: {
            init: new Date().toISOString(),
            validateOn: ['change'],
            rules: [
                //* added validation, because next field (dateTo) validates ONLY ONCHANGE
                //* and if change starting date (dateFrom) later after that, validation of dateTO is not triggered
                //* and field is still valid. Initiated validation manually onFieldsChange in CampaignDatesLayout component
                {
                    name: 'dateFrom',
                    validator: (value, { dateTo }) => {
                        if (new Date(value) < new Date(getDateBeforeAndReturnISO(1))) return false;
                        const dateToIsLaterThanDateFrom = new Date(dateTo).getDate() > new Date(value).getDate();
                        return dateToIsLaterThanDateFrom;
                    }
                }
            ]
        },
        dateTo: {
            init: new Date().toISOString(),
            validateOn: ['change'],
            rules: [
                {
                    name: 'dateTo',
                    validator: (value, { dateFrom }) => {
                        // if (new Date(dateFrom) < new Date(getDateBeforeAndReturnISO(1))) return false;
                        const differenceDates = new Date(value).getDate() - new Date(dateFrom).getDate();
                        return differenceDates >= 1;
                    }
                }
            ]
        },
        budget: {
            init: '',
            validateOn: ['change'],
            rules: [
                //* removed dependency on dateTo, as if date is invalid  BUDGET FIELD shows error text for budget input not
                {
                    name: 'budget',
                    source: walletStores.walletBalance,
                    validator: (value, _, walletBalance) => {
                        if (value === '' || value === '0') return false;
                        return Number(value) <= walletBalance;
                    }
                }
            ]
        }
    },
    validateOn: ['submit', 'blur']
});

export const createCampaignEvent = createEvent<WOM.CampaignUpsertRequest>();
createCampaignEvent.watch(_ => createCampaignEvents.setStep(0));

forward({ from: createCampaignEvent, to: createCampaignForm.reset });

//using endpoint for submit
sample({
    source: createCampaignForm.$values,
    clock: createCampaignForm.submit,
    target: createCampaignEvent,
    fn: ({ campaignName, dateFrom, dateTo, videos, budget }, _) => ({
        organizationId: getOrganizationId(),
        title: campaignName,
        // tags: [],
        contentIds: videos.map(({ womContentId }) => womContentId) as string[],
        schedule: {
            utcToStart: dateFrom,
            utcToEnd: dateTo
        },
        budget: {
            budgetTotal: Number(budget)
        },
        settings: {
            watchOverride: false,
            mustWatch: false
        }
    })
});
