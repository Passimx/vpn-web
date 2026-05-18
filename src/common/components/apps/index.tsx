import { FC } from 'react';
import styles from './index.module.css';
import vpnIcon from '../../../../public/assets/images/vpn-icon.png';
import { AppType } from './types/app.type.ts';
import { useSetPage } from '../../hooks/use-set-page.hook.ts';
import { VpnApp } from '../../pages/vpn-app';
import { Image } from '../image';

export const Apps: FC = () => {
    const setPage = useSetPage();
    const apps: AppType[] = [{ id: 'asd', name: 'PassimX VPN', icon: vpnIcon, app: <VpnApp /> }];

    return (
        <div className={styles.background}>
            {apps.map(({ id, name, icon, app }) => (
                <div className={styles.div1} key={id} onClick={() => setPage(app)}>
                    <div className={styles.div11}>
                        <Image src={icon} className={styles.div2} />
                    </div>
                    <div className={styles.div3}>{name}</div>
                </div>
            ))}
        </div>
    );
};
