import { EventsEnum } from '../types/events/events.enum.ts';
import { useAppAction } from '../store';
import { EventsType } from '../types/events/event-data.type.ts';

export const useAppEvents = () => {
    const { changeSettings } = useAppAction();

    return async (dataEvent: EventsType) => {
        const { event, data } = dataEvent;

        switch (event) {
            //     case EventsEnum.GET_SOCKET_ID:
            //         if (!data.success) break;
            //         setStateApp({ socketId: data.data });
            //         break;
            //     case EventsEnum.JOIN_CHAT:
            //         if (!data.success) break;
            //         if (getRawChat(data.data.id)) break;
            //         if (data.data.type === ChatEnum.IS_FAVORITES) setStateApp({ favoritesChatName: data.data.name });
            //         if (data.data.type === ChatEnum.IS_SYSTEM) setStateApp({ systemChatName: data.data.name });
            //         setToBegin(await prepareChat(data.data));
            //         playNotificationSound();
            //         break;
            //     case EventsEnum.CREATE_MESSAGE:
            //         if (!data.success) break;
            //         playNotificationSound();
            //         createMessage(await MessagesService.decryptMessage(data.data));
            //         if (getRawChat(data.data.chatId)) setToBegin(getRawChat(data.data.chatId)!);
            //         break;
            //     case EventsEnum.UPDATE_CHAT:
            //         if (data.success) update(data.data);
            //         break;
            //     case EventsEnum.LEAVE_CHAT:
            //         if (!data.success) break;
            //         await leaveChat(data.data);
            //         break;
            //     case EventsEnum.UPDATE_ME:
            //         if (!data.success) break;
            //         setStateUser(await prepareUser(data.data));
            //         break;
            //     case EventsEnum.CLOSE_SOCKET:
            //         setStateApp({ socketId: undefined, isListening: false });
            //         break;
            //     case EventsEnum.PLAY_NOTIFICATION:
            //         playNotificationSound();
            //         break;
            case EventsEnum.CHANGE_LANGUAGE:
                changeSettings({ lang: data });
                break;
            //     case EventsEnum.ERROR:
            //         console.log(`${'\x1B[31m'}error: ${data}${'\x1B[31m'}`);
            //         break;
            //     case EventsEnum.SET_STATE_APP:
            //         setStateApp(data);
            //         break;
            //     case EventsEnum.CREATE_USER:
            //         Envs.userId = data.id;
            //         setStateUser(data);
            //         Envs.RSAKeys = { publicKey: data.rsaPublicKey!, privateKey: data.rsaPrivateKey! };
            //         break;
            //     case EventsEnum.LOGOUT:
            //         logout();
            //         await deleteAllCache();
            //         setStateApp({ activeTab: TabEnum.CHATS, page: undefined });
            //         break;
        }
    };
};
