import { createRule, yupChannels, yupDefault, yupDefaultArray } from 'constants/yupFields';
import addDays from 'date-fns/addDays';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import startOfToday from 'date-fns/startOfToday';
import { createEvent, forward, sample } from 'effector';
import { createForm } from 'effector-forms';
import { nanoid } from 'nanoid';
import { createCampaignEvents } from 'stores/createCampaignSteps';
import { walletStores } from 'stores/wallet';
import { getOrganizationId } from 'utils/usefulFunctions';

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
            init: [] as string[],
            validateOn: ['change'],
            rules: [
                createRule<string[]>({
                    name: 'channels',
                    schema: yupChannels
                    //schema: yupDefaultArray
                })
            ]
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
                        const calendarDaysBetweenStartDateAndTodayDate = differenceInCalendarDays(
                            new Date(value),
                            startOfToday()
                        );
                        const calendarDaysBetweenStartDateAndEndDate = differenceInCalendarDays(
                            new Date(dateTo),
                            new Date(value)
                        );

                        //console.log('***form between Start and T0 >= 0', calendarDaysBetweenStartDateAndTodayDate >= 0);
                        //console.log('***form between Start And End >= 1', calendarDaysBetweenStartDateAndEndDate >= 1);

                        return (
                            calendarDaysBetweenStartDateAndTodayDate >= 0 && calendarDaysBetweenStartDateAndEndDate >= 1
                        );
                    }
                }
            ]
        },
        dateTo: {
            init: addDays(new Date(), 1).toISOString(),
            validateOn: ['change'],
            rules: [
                {
                    name: 'dateTo',
                    validator: (value, { dateFrom }) => {
                        // if (new Date(dateFrom) < new Date(getDateBeforeAndReturnISO(1))) return false;

                        const calendarDaysBetweenTodayDateAndEndDate = differenceInCalendarDays(
                            new Date(value),
                            startOfToday()
                        );
                        const calendarDaysBetweenStartDateAndEndDate = differenceInCalendarDays(
                            new Date(value),
                            new Date(dateFrom)
                        );

                        //console.log('***form days between start and end ', calendarDaysBetweenStartDateAndEndDate >= 1);
                        // console.log('** form days between T0 and end', calendarDaysBetweenStartDateAndEndDate >= 1);

                        return (
                            calendarDaysBetweenStartDateAndEndDate >= 1 && calendarDaysBetweenTodayDateAndEndDate >= 1
                        );
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
    fn: ({ campaignName, dateFrom, dateTo, videos, budget, channels }, _) => ({
        organizationId: getOrganizationId(),
        title: campaignName,
        // tags: [],
        contentIds: videos.map(({ womContentId }) => womContentId) as string[],
        channelIds: channels,
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
