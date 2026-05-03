export type ItemCurrencyPrice = {
    usd: number;
    rub: number;
    cny: number;
    eur: number;
};

export type CurrencyPrice = {
    'the-open-network': ItemCurrencyPrice;
    usd: ItemCurrencyPrice;
};
