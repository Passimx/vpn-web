import { FC } from 'react';
import { Props } from './types/props.type.ts';
import styles from './index.module.css';

export const PageTitle: FC<Props> = ({ title }) => {
    return <div className={`${styles.background} text_translate`}>{title}</div>;
};
