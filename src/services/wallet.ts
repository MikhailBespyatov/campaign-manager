import axios from './axios';

export const getTokenInfo = (data: WOM.ExchangeRateRequest) =>
    axios<WOM.ExchangeRateResponse>({
        url: '/wallet/getTokenInfo',
        data
    });
