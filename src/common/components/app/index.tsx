import type { FC } from 'react';
import { useSettings } from '../../hooks/use-settings.hook.ts';
import { useTranslation } from '../../hooks/translations/use-translation.ts';
import { useIsIos } from '../../hooks/use-is-ios.hook.ts';
import { useIsPhone } from '../../hooks/use-is-phone.hook.ts';
import styles from './index.module.css';
import { Auth } from '../auth';
import { ChildrenPropsType } from '../../types/props/children-props.type.ts';
import { Header } from '../header';
import { TopElements } from '../top-elements';
import { useBroadcastChannel } from '../../hooks/use-broadcast-channel.ts';

export const App: FC<ChildrenPropsType> = ({ children }) => {
    useIsIos();
    useIsPhone();
    useSettings();
    useBroadcastChannel();

    const lang = useTranslation();
    if (!lang) return <></>;

    return (
        <div className={styles.background}>
            <TopElements />
            <div className={styles.background_2}>
                <Header />
                <Auth>{children}</Auth>
            </div>
        </div>
    );
};
