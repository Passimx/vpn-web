import { FC } from 'react';
import styles from './index.module.css';
import icon180 from '../../../../public/assets/icons/180.png';
import { AppType } from './types/app.type.ts';
import { useSetPage } from '../../hooks/use-set-page.hook.ts';
import { VpnApp } from '../../pages/vpn-app';

export const Apps: FC = () => {
    const setPage = useSetPage();
    const apps: AppType[] = [{ id: 'asd', name: 'PassimX VPN', icon: icon180, app: <VpnApp /> }];

    return (
        <div className={styles.background}>
            {apps.map(({ id, name, icon, app }) => (
                <div className={styles.div1} key={id} onClick={() => setPage(app)}>
                    <img className={styles.div2} src={icon} alt={'icon'} />
                    <div className={styles.div3}>{name}</div>
                </div>
            ))}
        </div>
    );
};
