import { FC } from 'react';
import styles from './index.module.css';
import { ChildrenPropsType } from '../../types/props/children-props.type.ts';

export const Card: FC<ChildrenPropsType> = ({ children }) => {
    return (
        <div className={styles.background}>
            <pre>{children}</pre>
        </div>
    );
};
