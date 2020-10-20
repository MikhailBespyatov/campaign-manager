import { createEffect, createEvent, createStore } from 'effector';
import { API } from 'services';

const updateLoading = createEvent();
const setLoading = createEvent<boolean>();

const loading = createStore<boolean>(false)
    .on(updateLoading, state => !state)
    .on(setLoading, (_, newState) => newState);

const setUsdRate = createEvent<number>();

const usdRate = createStore<number>(0).on(setUsdRate, (_, newState) => newState);

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

const tokenInfo = createStore<WOM.ExchangeRateResponse>({}).on(getTokenInfo.doneData, (_, newState) => newState);
//@ts-ignore
tokenInfo.watch(getTokenInfo.doneData, ({ womExchangeRates }) => setUsdRate(womExchangeRates[0].price));

const walletEvents = {};
const walletEffects = { getTokenInfo };
const walletStores = { usdRate, loading };

export { walletEffects, walletStores, walletEvents };
