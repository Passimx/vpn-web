import { FC, useEffect } from 'react';
import styles from './index.module.css';
import { PropsType } from './types/props.type.ts';

export const InvoicePage: FC<PropsType> = ({ request }) => {
    const getResponse = async () => {
        const result = await request;
        console.log(result);
    };

    useEffect(() => {
        getResponse();
    }, []);

    return <div className={styles.background}>asfd</div>;
};
