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
