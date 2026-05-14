import { Api, IData } from '../index.ts';
import { ChangeServerDto, GetServersDto, GetServersResponse } from '../../types/api/servers.ts';
import { UserKeyType } from '../../store/user/types/state.type.ts';

export const getServers = (body: GetServersDto): Promise<IData<GetServersResponse[]>> => {
    return Api<GetServersResponse[]>('/servers', { method: 'POST', body });
};

export const changeServer = (body: ChangeServerDto): Promise<IData<UserKeyType>> => {
    return Api<UserKeyType>('/change-server', { method: 'POST', body });
};
