import { useAppAction, useAppSelector } from '../store';
import { JSX } from 'react';
import { TabEnum } from '../store/app/types/state.type.ts';

export const useSetPage = () => {
    const { setStateApp } = useAppAction();
    const activeTab = useAppSelector((state) => state.app.activeTab);
    const pages = useAppSelector((state) => state.app.pages);

    return (element: JSX.Element) => {
        const actualPages = pages.get(activeTab) || [];
        const newPages = [...actualPages, element];
        const updatedPages = new Map<TabEnum, React.JSX.Element[]>([...pages, [activeTab, newPages]]);
        setStateApp({ pages: updatedPages });
    };
};
