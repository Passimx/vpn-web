import { FC, useState } from 'react';
import styles from './index.module.css';
import { PageTitle } from '../page-title';
import { useTranslation } from 'react-i18next';
import { Card } from '../card';
import { Button } from '../button';
import { RotateLoading } from '../rotate-loading';
import { createAccount } from '../../api/auth';
import { useAppAction, useAppSelector } from '../../store';
import { EventsEnum } from '../../types/events/events.enum.ts';

export const CreateAccountPage: FC = () => {
    const { t } = useTranslation();
    const { postMessageToBroadCastChannel } = useAppAction();
    const [loading, setLoading] = useState<boolean>(false);
    const lang = useAppSelector((state) => state.app.settings?.lang);

    const create = async () => {
        setLoading(true);
        const response = await createAccount({ languageCode: lang || 'en' });
        if (!response.success) {
            setLoading(false);
            postMessageToBroadCastChannel({ event: EventsEnum.SHOW_TEXT, data: response.data });
            return;
        }

        const data = response.data;
        postMessageToBroadCastChannel({
            event: EventsEnum.UPDATE_USER,
            data: { token: data.token },
        });
    };

    return (
        <div className={styles.background}>
            <PageTitle title={t('creation_account')} />
            {loading ? (
                <RotateLoading />
            ) : (
                <div className={styles.div1}>
                    <Card>
                        <div>{t('t26')}</div>
                    </Card>
                    <Card>
                        <Button text={t('create_by_passimx')} onClick={create} />
                    </Card>
                </div>
            )}
        </div>
    );
};
