import { JSX } from 'react';

export type SettingsType = {
    lang?: string;
};

export type StateType = {
    isOnline: boolean;
    isPhone?: boolean;
    isStandalone: boolean;
    isIos?: boolean;
    settings?: SettingsType;

    isActiveTab?: boolean;
    page?: JSX.Element;
};
