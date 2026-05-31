import { FC } from 'react';
import styles from './index.module.css';
import { useAppSelector } from '../../../../store';
import { PageTitle } from '../../../../components/page-title';
import { useTranslation } from 'react-i18next';
import { Card } from '../../../../components/card';
import { useSetPage } from '../../../../hooks/use-set-page.hook.ts';
import { IoIosAddCircle } from 'react-icons/io';
import { SelectTariff } from '../select-tariff';
import { Key } from '../key';

export const Keys: FC = () => {
    const { t } = useTranslation();
    const setPage = useSetPage();
    const keys = useAppSelector((state) => state.user.keys);

    return (
        <div className={styles.background}>
            <PageTitle title={t('t18')} />
            <div className={styles.div1}>
                <div className={styles.div1o} onClick={() => setPage(<SelectTariff />)}>
                    <Card>
                        <div className={styles.div2o}>
                            <div className={styles.div3o} style={{ backgroundColor: '#00b300' }}>
                                <IoIosAddCircle className={styles.div4o} />
                            </div>
                            <div>{t('buy_key')}</div>
                        </div>
                    </Card>
                </div>

                {keys?.map(({ id, serverCode, status, expiresAt, createdAt }) => (
                    <div key={id} className={styles.div91} onClick={() => setPage(<Key keyId={id} />)}>
                        <Card>
                            <div className={styles.div5}>
                                <div className={styles.div6}>
                                    <div>ID:</div>
                                    <div>{id}</div>
                                </div>
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
                                <div className={styles.div6}>
                                    <div>{t('created_at')}:</div>
                                    <div>
                                        {new Date(createdAt).toLocaleDateString('ru-RU', {
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
