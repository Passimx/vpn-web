import { LocalEvents } from './local-events.type.ts';
import { ServerEventsType } from './server-events.type.ts';

export type EventsType = LocalEvents | ServerEventsType;
