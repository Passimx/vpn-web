import { FC, useMemo } from 'react';
import styles from './index.module.css';
import { Card } from '../../../../components/card';
import { PropsType } from './types/props.type.ts';
import { changeAutoRenewKey, deleteKey } from '../../../../api/tariffs';
import { EventsEnum } from '../../../../types/events/events.enum.ts';
import { useAppAction, useAppSelector } from '../../../../store';
import { useTranslation } from 'react-i18next';
import { Extending } from '../extending';
import { ChangeServer } from '../change-server';
import { useSetPage } from '../../../../hooks/use-set-page.hook.ts';

export const Key: FC<PropsType> = ({ keyId }) => {
    const { t } = useTranslation();
    const setPage = useSetPage();
    const { postMessageToBroadCastChannel, setStateUser } = useAppAction();
    const keys = useAppSelector((state) => state.user.keys);
    const key = useMemo(() => keys?.find((key) => key.id === keyId), [keys, keyId]);

    const onDelete = async () => {
        const result = await deleteKey({ keyId });

        if (result.success) setStateUser(result.data);
        else postMessageToBroadCastChannel({ event: EventsEnum.SHOW_TEXT, data: result.data });
    };

    const onChangeAutoRenew = async () => {
        const result = await changeAutoRenewKey({ keyId });

        if (result.success) setStateUser(result.data);
        else postMessageToBroadCastChannel({ event: EventsEnum.SHOW_TEXT, data: result.data });
    };

    if (key)
        return (
            <div className={styles.div1}>
                <Card>
                    <div className={styles.div5}>
                        <div className={styles.div6}>
                            <div>ID:</div>
                            <div>{key.id}</div>
                        </div>
                        <div className={styles.div6}>
                            <div>{t('t19')}:</div>
                            <div>
                                {t(`${key.serverCode}_flag`)}&nbsp;{t(`${key.serverCode}_name`)}
                            </div>
                        </div>
                        <div className={styles.div6}>
                            <div>{t('status')}:</div>
                            <div className={key.status === 'active' ? styles.div7 : styles.div8}>{t(key.status)}</div>
                        </div>
                        <div className={styles.div6}>
                            <div>{t('active_until')}:</div>
                            <div>
                                {new Date(key.expiresAt).toLocaleDateString('ru-RU', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                })}
                            </div>
                        </div>
                        <div className={styles.div6}>
                            <div>{t('created_at')}:</div>
                            <div>
                                {new Date(key.createdAt).toLocaleDateString('ru-RU', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                })}
                            </div>
                        </div>
                        <div className={styles.div11}>
                            <div
                                className={styles.div12}
                                onClick={() =>
                                    setPage(
                                        <Extending
                                            keyId={key.id}
                                            kind={key.serverCode === 'white' ? 'premium' : 'base'}
                                        />,
                                    )
                                }
                            >
                                <div className={styles.div13}>{t('extend_key')}</div>
                            </div>
                            {key.status === 'active' && key.serverCode !== 'white' && (
                                <div className={styles.div12} onClick={() => setPage(<ChangeServer keyId={key.id} />)}>
                                    <div className={styles.div13}>{t('change_server')}</div>
                                </div>
                            )}
                            <div
                                className={styles.div12}
                                onClick={() => {
                                    navigator.clipboard.writeText(key.key);
                                    postMessageToBroadCastChannel({
                                        event: EventsEnum.SHOW_TEXT,
                                        data: 'copied',
                                    });
                                }}
                            >
                                <div className={styles.div13}>{t('copy_key')}</div>
                            </div>
                            <div className={styles.div12} onClick={onChangeAutoRenew}>
                                <div
                                    className={`${styles.div13} ${key.autoRenewEnabled ? styles.div14 : styles.div15}`}
                                >
                                    {t(key.autoRenewEnabled ? 'disable_auto_renew' : 'enable_auto_renew')}
                                </div>
                            </div>
                            {key.status === 'expired' && (
                                <div className={styles.div12} onClick={onDelete}>
                                    <div className={`${styles.div13} ${styles.div14}`}>{t('delete_key')}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </Card>
            </div>
        );
};
