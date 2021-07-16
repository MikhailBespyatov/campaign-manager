import axios from 'services/axios';

export const getChannelById = (data: WOM.GetChannelRequest) =>
    axios<WOM.ChannelResponse>({
        url: '/channel/get',
        data
    });

export const getChannels = (data: WOM.QueryChannelsRequest) =>
    axios<WOM.ChannelsResponse>({
        url: '/channel/query',
        data
    });

export const createChannel = (data: WOM.CreateChannelRequest) =>
    axios<WOM.ChannelResponse>({
        url: '/channel/create',
        data
    });

export const updateChannel = (data: WOM.UpdateChannelRequest) =>
    axios<WOM.ChannelResponse>({
        url: '/channel/update',
        data
    });

export const deleteChannelById = (data: WOM.DeleteChannelRequest) =>
    axios<WOM.MessageResponseBase>({
        url: '/channel/delete',
        data
    });

export const getPublicChannels = (data: WOM.OrganizationChannelQueryRequest) =>
    axios<WOM.OrganizationChannelQueryResponse>({
        url: '/campaign/channel/query-public',
        data
    });

export const getPrivateChannels = (data: WOM.QueryPrivateChannelsRequest) =>
    axios<WOM.QueryPrivateChannelsResponse>({
        url: '/campaign/channel/query-private',
        data
    });

export const getChannelPlaylist = (data: WOM.QueryChannelPlaylistRequest) =>
    axios<WOM.QueryChannelPlaylistResponse>({
        url: '/channel/query-playlist',
        data
    });
