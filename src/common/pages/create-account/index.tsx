import { FC } from 'react';
import styles from './index.module.css';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../../components/page-title';

export const CreateAccountPage: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.background}>
            <PageTitle title={t('creation_account')} />
        </div>
    );
};
