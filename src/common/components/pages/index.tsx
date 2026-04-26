import { FC, useEffect } from 'react';
import { useAppSelector } from '../../store';
import { NavigationItem } from '../navigation-item';
import styles from './index.module.css';

export const Pages: FC = () => {
    const { pages, activeTab } = useAppSelector((state) => state.app);
    const actualPages = pages?.get(activeTab);

    useEffect(() => {
        const actualPages = pages.get(activeTab) || [];
        if (!actualPages?.length) return;

        const element = document.getElementById(styles.background)!;
        element?.scrollTo({ left: element.clientWidth * actualPages.length, behavior: 'smooth' });
    }, [pages]);

    return (
        <div id={styles.background}>
            {actualPages?.map((page, index) => (
                <NavigationItem key={index} index={index}>
                    {page}
                </NavigationItem>
            ))}
        </div>
    );
};
