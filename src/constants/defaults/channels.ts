import { defaultLimit, defaultPage } from 'constants/defaults/common';

export const defaultChannelsValues: WOM.QueryChannelsRequest = {
    pageIndex: defaultPage,
    limit: defaultLimit,
    returnQueryCount: true
};

export const defaultChannelScriptLink = 'https://wom.channel.viewer.incodewetrust.online/static/js/wom.js';
