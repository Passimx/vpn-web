import { FC } from 'react';
import styles from './index.module.css';
import { useTranslation } from 'react-i18next';
import { useAppAction } from '../../store';
import { Languages } from '../languages';

export const Header: FC = () => {
    const { setStateApp } = useAppAction();
    const { t } = useTranslation();

    const onClickLang = () => {
        setStateApp({ page: <Languages /> });
    };

    return (
        <div className={styles.background}>
            <div className={`${styles.background_2} text_translate`} onClick={onClickLang}>
                <div className={styles.flag}> {t('language_native_flag')}</div>
                <div>{t('language')}</div>
            </div>
        </div>
    );
};
