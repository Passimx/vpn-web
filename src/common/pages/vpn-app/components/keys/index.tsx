import { FC } from 'react';
import styles from './index.module.css';
import { useAppSelector } from '../../../../store';
import { PageTitle } from '../../../../components/page-title';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../../components/card';

export const Keys: FC = () => {
    const { t } = useTranslation();
    const keys = useAppSelector((state) => state.user.keys);

    return (
        <div className={styles.background}>
            <PageTitle title={t('t18')} />
            <div className={styles.div1}>
                {keys?.map(({ id, serverCode, status, expiresAt }) => (
                    <div key={id}>
                        <Card>
                            <div className={styles.div5}>
                                <div className={styles.div6}>
                                    <div>{t('t19')}:</div>
                                    <div>
                                        {t(`${serverCode}_flag`)}&nbsp;{t(`${serverCode}_name`)}
                                    </div>
                                </div>
                                <div className={styles.div6}>
                                    <div>{t('status')}:</div>
                                    <div className={status === 'active' ? styles.div7 : styles.div8}>{t(status)}</div>
                                </div>
                                <div className={styles.div6}>
                                    <div>{t('active_until')}:</div>
                                    <div>
                                        {new Date(expiresAt).toLocaleDateString('ru-RU', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                        })}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};
