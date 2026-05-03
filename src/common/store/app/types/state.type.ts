import { JSX } from 'react';
import { CurrencyPrice } from '../../../types/api/currency-price.ts';

export type SettingsType = {
    lang: string;
    currency: string;
    currencyPrice: CurrencyPrice;
};

export enum TabEnum {
    MAIN = 'main',
}

export type StateType = {
    isOnline: boolean;
    isPhone?: boolean;
    isStandalone: boolean;
    isIos?: boolean;
    settings?: SettingsType;

    isActiveTab?: boolean;
    foreground?: JSX.Element;

    activeTab: TabEnum;
    pages: Map<TabEnum, JSX.Element[]>;
};
