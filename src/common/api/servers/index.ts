import { Api, IData } from '../index.ts';
import { ChangeServerDto, GetServersDto, GetServersResponse } from '../../types/api/servers.ts';
import { UserResponse } from '../../types/api/user.ts';

export const getServers = (body: GetServersDto): Promise<IData<GetServersResponse[]>> => {
    return Api<GetServersResponse[]>('/servers', { method: 'POST', body });
};

export const changeServer = (body: ChangeServerDto): Promise<IData<UserResponse>> => {
    return Api<UserResponse>('/change-server', { method: 'POST', body });
};
