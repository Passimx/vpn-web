import { CurrencyEnum } from './currency.enum.ts';
import { AppWalletEnum } from './app-wallet.enum.ts';

export type CreateInvoiceType = {
    amount: number;
};

export type CreateTonInvoiceType = {
    amount: number;
    currency: CurrencyEnum.TON;
    app: AppWalletEnum;
};
