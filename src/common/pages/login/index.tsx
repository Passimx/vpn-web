import styles from './index.module.css';
import { useTranslation } from 'react-i18next';
import { FaTelegramPlane } from 'react-icons/fa';
import { useSetPage } from '../../hooks/use-set-page.hook.ts';
import { TelegramLogin } from '../telegram-login';
import { PageTitle } from '../../components/page-title';

export const LoginPage = () => {
    const { t } = useTranslation();
    const setPage = useSetPage();

    const loginTelegram = () => setPage(<TelegramLogin />);
    // const loginAccount = () => setPage(<LoginPage />);
    // const createAccount = () => setPage(<CreateAccountPage />);

    return (
        <div className={styles.background1}>
            <PageTitle title={t('login_to_PassimX')} />
            <div className={styles.background3}>
                {/*<div className={styles.background31} onClick={loginAccount}>*/}
                {/*    <RiLoginCircleLine />*/}
                {/*    <div>{t('login_by_passimx')}</div>*/}
                {/*</div>*/}
                {/*<div className={styles.background31} onClick={createAccount}>*/}
                {/*    <RiAccountCircleLine />*/}
                {/*    <div>{t('create_by_passimx')}</div>*/}
                {/*</div>*/}
                <div className={styles.background31} onClick={loginTelegram}>
                    <FaTelegramPlane />
                    <div>{t('login_by_telegram')}</div>
                </div>
            </div>
        </div>
    );
};
