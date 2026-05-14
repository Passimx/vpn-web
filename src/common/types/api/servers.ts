export type GetServersDto = {
    notId: string;
};

export type GetServersResponse = {
    id: string;
    code: string;
};

export type ChangeServerDto = {
    keyId: string;
    serverId: string;
};
