import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';
import { getDateFromString } from 'utils/usefulFunctions';

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();
const loading = createStore(false)
    .on(updateLoading, state => !state)
    .on(setLoading, (_, newState) => newState);

const updateBalanceLoading = createEvent();
const balanceLoading = createStore(false).on(updateBalanceLoading, state => !state);

const getTokenInfo = createEffect({
    handler: async () => {
        try {
            updateLoading();
            const data = await API.wallet.getTokenInfo({});
            updateLoading();

            return data;
        } catch {
            updateLoading();
            return {};
        }
    }
});

const getItemById = createEffect({
    handler: async (id: string) => {
        try {
            updateBalanceLoading();
            const data = await API.wallet.getItem({ walletId: id });
            updateBalanceLoading();

            return data;
        } catch {
            updateBalanceLoading();
            return {};
        }
    }
});

export const walletBalance = createStore(0).on(getItemById.doneData, (_, wallet) => wallet?.items?.[0]?.balance || 0);

export const walletAddress = createStore('').on(getItemById.doneData, (_, wallet) => wallet?.items?.[0]?.address || '');

const walletCreated = createStore('').on(getItemById.doneData, (_, wallet) =>
    getDateFromString(wallet?.items?.[0]?.utcCreated || '')
);

const usdRate = createStore(0)
    // @ts-ignore
    .on(getTokenInfo.doneData, (_, { womExchangeRates }) => womExchangeRates[0].price.toFixed(4));

const walletEvents = {};
const walletEffects = { getTokenInfo, getItemById };
const walletStores = { usdRate, loading, balanceLoading, walletBalance, walletAddress, walletCreated };

export { walletEffects, walletStores, walletEvents };
