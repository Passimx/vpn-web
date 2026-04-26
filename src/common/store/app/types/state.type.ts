import { JSX } from 'react';

export type SettingsType = {
    lang?: string;
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
