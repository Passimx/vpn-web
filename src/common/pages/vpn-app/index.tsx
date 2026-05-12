import { FC } from 'react';
import styles from './index.module.css';
import { Card } from '../../components/card';
import { useTranslation } from 'react-i18next';
import { useSetPage } from '../../hooks/use-set-page.hook.ts';
import { Keys } from './components/keys';
import { useAppSelector } from '../../store';

export const VpnApp: FC = () => {
    const { t } = useTranslation();
    const setPage = useSetPage();
    const keysCount = useAppSelector((state) => state.user.keys?.length);

    return (
        <div className={styles.background}>
            {keysCount && (
                <Card onClick={() => setPage(<Keys />)}>
                    <div className={styles.div1}>{t('t18')}</div>
                </Card>
            )}
        </div>
    );
};
