import { createForm } from 'effector-forms';
import { createRule, yupDefault, yupDefaultArray } from 'constants/yupFields';
import { nanoid } from 'nanoid';

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
                    schema: yupDefaultArray
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
        budget: {
            init: 0,
            validateOn: ['change'],
            rules: [
                createRule<number>({
                    name: 'budget',
                    schema: yupDefault
                })
            ]
        }
    },
    validateOn: ['submit', 'blur']
});
