import { Api, IData } from '../index.ts';
import { CurrencyPrice } from '../../types/api/currency-price.ts';

export const getCurrencyPrice = (): Promise<IData<CurrencyPrice>> => {
    return Api<CurrencyPrice>('/currency-price');
};
