import { FC } from 'react';
import styles from './index.module.css';
import icon180 from '../../../../public/assets/icons/180.png';
import { AppType } from './types/app.type.ts';
import { useAppAction } from '../../store';
import { EventsEnum } from '../../types/events/events.enum.ts';

export const Apps: FC = () => {
    const { postMessageToBroadCastChannel } = useAppAction();
    const apps: AppType[] = [{ id: 'asd', name: 'PassimX VPN', icon: icon180, url: 'http://localhost:8080' }];

    return (
        <div className={styles.background}>
            {apps.map(({ id, name, icon }) => (
                <div
                    className={styles.div1}
                    key={id}
                    onClick={() => postMessageToBroadCastChannel({ event: EventsEnum.SHOW_TEXT, data: 't17' })}
                >
                    <img className={styles.div2} src={icon} alt={'icon'} />
                    <div className={styles.div3}>{name}</div>
                </div>
            ))}
        </div>
    );
};
