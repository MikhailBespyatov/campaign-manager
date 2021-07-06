import { itemHorizontalMargin } from 'components/common/dividers/BarItem/constants';
import { grey8 } from 'constants/styles';

export const channelsItem = [{ path: 'Public' }, { path: 'Private' }];
export const publicChannelParameters = ['Channel Name', 'Channel Link', 'Add to Campaign'];

// 75 - from origin design
export const channelsItemMarginRight = 75 - parseInt(itemHorizontalMargin) + 'px';

export const tableHeaderBorder = `1px solid ${grey8};`;

export const scrollBarWidth = '8px';
export const publicChannelsPaddingLeft = '22px';
export const channelsPadding = `16px 106px`;

export const copyButtonIconDiameter = '16px';
export const copyButtonDiameter = '32px';

export const channelLogoDiameter = '48px';
export const channelBorder = '1px solid #dedede';

//Mock data
export const publicChannelsMock = [
    {
        name: 'Submarino Cosmetics',
        item: [
            {
                channelName: 'Eyeshadow',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid&channelid'
            },
            {
                channelName: 'Liner',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid&channelid'
            },
            {
                channelName: 'Maskara',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid&channelid'
            },
            {
                channelName: 'Brauen',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Primer',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Wimper',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            }
        ]
    },
    {
        name: 'Amazon DE Cosmetics',
        item: [
            {
                channelName: 'Aligalo',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Cesaris',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Verpa',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Albus',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Est',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Wier',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            }
        ]
    },
    {
        name: 'Bob’s emporium Power Tools',
        item: [
            {
                channelName: 'Fake',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Data',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Verpa',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Neosl',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Heige',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            },
            {
                channelName: 'Ligen',
                channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
            }
        ]
    },
    { name: 'Submarino Cosmetics 1', item: [] },
    { name: 'Amazon DE Cosmetics 1', item: [] },
    { name: 'Bob’s emporium Power Tools 1', item: [] },
    { name: 'Submarino Cosmetics 2', item: [] },
    { name: 'Amazon DE Cosmetics 2', item: [] },
    { name: 'Bob’s emporium Power Tools 2', item: [] }
];

export const privateChannelMock = [
    {
        channelName: 'Eyeshadow',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid&channelid'
    },
    {
        channelName: 'Liner',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid&channelid'
    },
    {
        channelName: 'Maskara',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid&channelid'
    },
    {
        channelName: 'Brauen',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Primer',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Wimper',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Aligalo',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Cesaris',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Verpa',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Albus',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Est',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Wier',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Fake',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Data',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Verpa',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Neosl',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Heige',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    },
    {
        channelName: 'Ligen',
        channelLink: 'https://something.yeay.com/?merchantid=22&channelid'
    }
];
