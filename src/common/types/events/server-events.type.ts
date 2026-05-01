import { EventsEnum } from './events.enum.ts';

type Logout = {
    readonly event: EventsEnum.LOGOUT;
    readonly data?: unknown;
};

export type ServerEventsType = Logout;
