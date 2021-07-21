import { defaultChannelsValues } from 'constants/defaults/channels';
import { createEffect, createEvent, createStore, forward, restore } from 'effector';
import { API } from 'services';
import { initializeIsFirstStore } from 'stores/initialize/initialize.isFirst.store';
import { loadingEffects } from 'stores/loading';

const { isFirst, setIsFirstToFalse, setIsFirstToTrue } = initializeIsFirstStore();

const getItemById = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateLoading();
            const data = await API.channels.getChannelById({ id });
            loadingEffects.updateLoading();

            return data;
        } catch {
            loadingEffects.updateLoading();
            return {};
        }
    }
});

const getItems = createEffect({
    handler: async (values: WOM.QueryChannelsRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.channels.getChannels(values);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const createChannel = createEffect({
    handler: async (values: WOM.CreateChannelRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.channels.createChannel(values);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const removeChannel = createEffect({
    handler: async (id: string) => {
        try {
            loadingEffects.updateInitialLoading();
            await API.channels.deleteChannelById({ id });
            loadingEffects.updateInitialLoading();

            return id;
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const updateChannel = createEffect({
    handler: async (values: WOM.UpdateChannelRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.channels.updateChannel(values);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const item = restore<WOM.ChannelResponse>(getItemById.doneData, {});
const items = createStore<WOM.ChannelsResponse>({})
    .on(getItems.doneData, (_, newState) => newState)
    .on(createChannel.doneData, (state, newState) => ({ ...state, items: [...(state?.items || []), newState] }))
    .on(updateChannel.doneData, (state, newState) => ({
        ...state,
        items: [...(state?.items?.map(item => (item.id !== newState.id ? item : newState)) || [])]
    }))
    .on(removeChannel.doneData, (state, id) => ({
        ...state,
        items: [...(state?.items?.filter(item => item.id !== id) || [])]
    }));

const updateValues = createEvent<Partial<WOM.QueryChannelsRequest>>();
const setDefaultValues = createEvent();
const invokeGetChannels = createEvent();

const values = createStore<WOM.QueryChannelsRequest>(defaultChannelsValues)
    .on(invokeGetChannels, state => state)
    .on(updateValues, (state, values) => ({ ...state, ...values }))
    .on(setDefaultValues, _ => defaultChannelsValues);

values.watch(invokeGetChannels, values => getItems(values));

forward({
    from: [values],
    to: [getItems]
});

const getPublicChannels = createEffect({
    handler: async (values: WOM.OrganizationChannelQueryRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.channels.getPublicChannels(values);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const publicChannels = restore<WOM.OrganizationChannelQueryResponse>(getPublicChannels.doneData, {});

const updatePublicChannelsValues = createEvent<Partial<WOM.OrganizationChannelQueryRequest>>();
const setDefaultPublicChannelsValues = createEvent();
const invokeGetPublicChannels = createEvent();

const publicChannelsValues = createStore<WOM.OrganizationChannelQueryRequest>(defaultChannelsValues)
    .on(invokeGetPublicChannels, state => state)
    .on(updatePublicChannelsValues, (state, values) => ({ ...state, ...values }))
    .on(setDefaultPublicChannelsValues, _ => defaultChannelsValues);

publicChannelsValues.watch(invokeGetPublicChannels, values => getPublicChannels(values));

forward({
    from: [publicChannelsValues],
    to: [getPublicChannels]
});

const getPrivateChannels = createEffect({
    handler: async (values: WOM.QueryPrivateChannelsRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.channels.getPrivateChannels(values);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

const privateChannels = restore<WOM.QueryPrivateChannelsResponse>(getPrivateChannels.doneData, {});

const updatePrivateChannelsValues = createEvent<Partial<WOM.QueryPrivateChannelsRequest>>();
const setDefaultPrivateChannelsValues = createEvent();
const invokeGetPrivateChannels = createEvent();

const privateChannelsValues = createStore<WOM.QueryPrivateChannelsRequest>(defaultChannelsValues)
    .on(invokeGetPrivateChannels, state => state)
    .on(updatePrivateChannelsValues, (state, values) => ({ ...state, ...values }))
    .on(setDefaultPrivateChannelsValues, _ => defaultChannelsValues);

privateChannelsValues.watch(invokeGetPrivateChannels, values => getPrivateChannels(values));

forward({
    from: [privateChannelsValues],
    to: [getPrivateChannels]
});

const getChannelPlaylist = createEffect({
    handler: async (values: WOM.QueryChannelPlaylistRequest) => {
        try {
            loadingEffects.updateInitialLoading();
            const data = await API.channels.getChannelPlaylist(values);
            loadingEffects.updateInitialLoading();

            return data || {};
        } catch {
            loadingEffects.updateInitialLoading();
            return {};
        }
    }
});

// getChannelPlaylist({
//     channelId: '6054b8fe7343a8327256883a',
//     merchantId: '60502f360b62caccafa06037',
//     pageIndex: 0,
//     limit: 20,
//     returnQueryCount: true
// });

// getChannelPlaylist({
//     channelId: '60f167121922d91800c35251',
//     merchantId: '60502f360b62caccafa06037',
//     pageIndex: 0,
//     limit: 20,
//     returnQueryCount: true
// });

const channelsEvents = { updateValues, setDefaultValues, invokeGetChannels, setIsFirstToFalse, setIsFirstToTrue };
const channelsEffects = {
    getItemById,
    getItems,
    createChannel,
    updateChannel,
    removeChannel,
    getChannelPlaylist
};
const channelsStores = { item, items, values, isFirst };

const publicChannelsEvents = {
    updatePublicChannelsValues,
    setDefaultPublicChannelsValues,
    invokeGetPublicChannels
};

const privateChannelsEvents = {
    updatePrivateChannelsValues,
    setDefaultPrivateChannelsValues,
    invokeGetPrivateChannels
};

const publicChannelsEffects = { getPublicChannels };
const privateChannelsEffects = { getPrivateChannels };

const publicChannelsStores = { publicChannels, publicChannelsValues };
const privateChannelsStores = { privateChannels, privateChannelsValues };

export {
    channelsStores,
    channelsEvents,
    channelsEffects,
    publicChannelsStores,
    publicChannelsEvents,
    publicChannelsEffects,
    privateChannelsStores,
    privateChannelsEffects,
    privateChannelsEvents
};
