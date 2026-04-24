import { FC } from 'react';
import { ChildrenPropsType } from '../../types/props/children-props.type.ts';
import { useAppSelector } from '../../store';
import { LoginPage } from '../../pages/login';

export const Auth: FC<ChildrenPropsType> = ({ children }) => {
    const user = useAppSelector((state) => state.user);
    if (!user) return <LoginPage />;

    return children;
};
