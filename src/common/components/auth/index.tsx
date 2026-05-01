import { FC, useEffect } from 'react';
import { ChildrenPropsType } from '../../types/props/children-props.type.ts';
import { useAppSelector } from '../../store';
import { LoginPage } from '../../pages/login';
import { useSetPage } from '../../hooks/use-set-page.hook.ts';

export const Auth: FC<ChildrenPropsType> = ({ children }) => {
    const user = useAppSelector((state) => state.user);
    const setPage = useSetPage();

    useEffect(() => {
        if (!user.userId) setPage(<LoginPage />);
    }, [user]);

    return children;
};
