import { FC, JSX, memo, useEffect, useState } from 'react';
import styles from './index.module.css';
import { useVisibility } from '../../hooks/use-visibility.hook.ts';
import styles2 from '../pages/index.module.css';
import { useDeletePage } from '../../hooks/use-delete-page.hook.ts';
import { useTranslation } from 'react-i18next';
import { useScrollPage } from '../../hooks/use-scroll-page.hook.ts';

export const NavigationItem: FC<{ children: JSX.Element; index: number }> = memo(({ children, index }) => {
    const { t } = useTranslation();
    const id = `navigation_item_${index}`;
    const scrollPage = useScrollPage();
    const deletePage = useDeletePage();
    const [observerTarget, visible] = useVisibility();
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        if (visible) setIsActive(true);
    }, [visible]);

    useEffect(() => {
        if (visible) return;
        if (!isActive) return;

        const element = document.getElementById(styles2.background)!;
        const activePageIndex = element.scrollLeft / element.clientWidth;
        if (activePageIndex >= index) return;

        deletePage();
    }, [index, visible, isActive]);

    return (
        <div id={id} ref={observerTarget} className={styles.background}>
            {children}
            <div className={styles.background2}>
                {index > 0 && (
                    <div className={styles.background3} onClick={scrollPage}>
                        {t('back')}
                    </div>
                )}
            </div>
        </div>
    );
});
