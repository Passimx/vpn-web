import { FC } from 'react';
import styles from './index.module.css';
import { PageTitle } from '../../components/page-title';
import { useTranslation } from 'react-i18next';

export const TelegramLogin: FC = () => {
    const { t } = useTranslation();
    // const telegramUser = window.Telegram?.WebApp.initDataUnsafe?.user;
    // if (!telegramUser) window.open('https://t.me/passimx_vpn_test_bot?start=login', '_blank');
    // if (!telegramUser) window.open('tg://resolve?domain=passimx_vpn_bot&start=login_abc123', '_blank');

    return (
        <div className={styles.background}>
            <PageTitle title={t('telegram_login')} />
            <div></div>
        </div>
    );
};
