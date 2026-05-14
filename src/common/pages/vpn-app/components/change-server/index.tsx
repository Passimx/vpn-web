import { FC, useEffect, useState } from 'react';
import styles from './index.module.css';
import { useTranslation } from 'react-i18next';
import { useAppAction, useAppSelector } from '../../../../store';
import { PropsType } from './types/props.type.ts';
import { useScrollPage } from '../../../../hooks/use-scroll-page.hook.ts';
import { Card } from '../../../../components/card';
import { RotateLoading } from '../../../../components/rotate-loading';
import { changeServer, getServers } from '../../../../api/servers';
import { GetServersResponse } from '../../../../types/api/servers.ts';
import { EventsEnum } from '../../../../types/events/events.enum.ts';

export const ChangeServer: FC<PropsType> = ({ keyId }) => {
    const { t } = useTranslation();
    const [servers, setServers] = useState<GetServersResponse[]>([]);
    const { postMessageToBroadCastChannel, setStateUser } = useAppAction();
    const scrollPage = useScrollPage();
    const keys = useAppSelector((state) => state.user.keys)!;

    useEffect(() => {
        const getServersFunc = async () => {
            const response = await getServers({ notId: keyId });
            if (response.success) {
                const selectedKey = keys.find((key) => key.id === keyId)!;
                const list = response.data.filter((server) => server.id !== selectedKey.serverId);

                setServers(list);
            }
        };

        getServersFunc();
    }, [keyId]);

    const onChange = async (serverId: string) => {
        setServers([]);
        const response = await changeServer({ serverId, keyId });
        if (response.success) {
            const updatedKeys = keys.map((key) => (key.id === response.data.id ? response.data : key));
            setStateUser({ keys: updatedKeys });
        } else postMessageToBroadCastChannel({ event: EventsEnum.SHOW_TEXT, data: response.data });

        scrollPage();
    };

    return (
        <div className={styles.background}>
            {servers?.length ? (
                servers?.map(({ id, code }) => (
                    <div key={id}>
                        <Card onClick={() => onChange(id)}>
                            <div>
                                {t(`${code}_flag`)}&nbsp;{t(`${code}_name`)}
                            </div>
                        </Card>
                    </div>
                ))
            ) : (
                <RotateLoading />
            )}
        </div>
    );
};
