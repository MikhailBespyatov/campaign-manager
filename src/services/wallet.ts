import axios from './axios';

export const getTokenInfo = (data: WOM.ExchangeRateRequest) =>
    axios<WOM.ExchangeRateResponse>({
        url: '/wallet/getTokenInfo',
        data
    });

export const getItem = (data: WOM.WalletGetRequest) =>
    axios<WOM.WalletResponse>({
        url: '/wallet/get',
        data
    });
