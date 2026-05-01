import { FC } from 'react';
import styles from './index.module.css';
import { PageTitle } from '../../components/page-title';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components/card';
import { Link } from '../../components/link';
import { EventsEnum } from '../../types/events/events.enum.ts';
import { useAppAction } from '../../store';
import { IoCopyOutline } from 'react-icons/io5';
import { Envs } from '../../config/envs/envs.ts';
import crypto from 'crypto';
import { Button } from '../../components/button';

export const TelegramLogin: FC = () => {
    const { t } = useTranslation();
    const { postMessageToBroadCastChannel } = useAppAction();
    const secret = crypto.createHash('sha256').update(window.crypto.randomUUID()).digest('hex');
    const log = `/loginFromWeb=${secret}`;

    const confirm = () => {};

    // const telegramUser = window.Telegram?.WebApp.initDataUnsafe?.user;
    // if (!telegramUser) window.open('https://t.me/passimx_vpn_test_bot?start=login', '_blank');
    // if (!telegramUser) window.open('tg://resolve?domain=passimx_vpn_bot&start=login_abc123', '_blank');

    return (
        <div className={styles.background}>
            <PageTitle title={t('telegram_login')} />
            <div className={styles.background1}>
                <Card>
                    {t('text1')}
                    <br />
                    <div
                        className={styles.log_item}
                        onClick={() => {
                            navigator.clipboard.writeText(log);
                            postMessageToBroadCastChannel({ event: EventsEnum.SHOW_TEXT, data: 'copied' });
                        }}
                    >
                        <div className={styles.log_item_copy}>
                            <IoCopyOutline className={styles.log_item_logo} />
                        </div>
                        <div>{log}</div>
                    </div>
                    <br />
                    {t('text2')}
                    &nbsp;
                    <Link href={Envs.telegram.botLink}>PassimX VPN</Link>
                </Card>
                <Card>
                    {t('text3')}
                    <Button text={t('text4')} onClick={confirm} />
                </Card>
            </div>
        </div>
    );
};
