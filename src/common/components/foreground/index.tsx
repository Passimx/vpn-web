import { FC, useEffect } from 'react';
import { useAppAction, useAppSelector } from '../../store';
import useClickOutside from '../../hooks/use-click-outside.ts';
import { MdOutlineClose } from 'react-icons/md';
import styles from './index.module.css';

export const Foreground: FC = () => {
    const { setStateApp } = useAppAction();
    const [ref, isVisible, setIsVisible] = useClickOutside();
    const page = useAppSelector((state) => state.app.page);

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setStateApp({ page: undefined });
    };

    useEffect(() => {
        setIsVisible(!!page);
    }, [page]);

    useEffect(() => {
        if (isVisible) {
            window.addEventListener('keydown', handleKeyDown);
        }

        if (!isVisible) {
            setStateApp({ page: undefined });
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [isVisible]);

    if (page)
        return (
            <div className={styles.background}>
                <div className={styles.cancel_background}>
                    <MdOutlineClose className={styles.cancel_button} />
                </div>
                <div ref={ref} className={styles.page}>
                    {page}
                </div>
            </div>
        );
};
