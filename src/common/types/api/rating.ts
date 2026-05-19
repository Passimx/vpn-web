export type RefInfoUserItemType = {
    id: string;
    allCount: number;
    activeCount: number;
};

export type RatingUserType = {
    users: RefInfoUserItemType[];
    me: RefInfoUserItemType;
};
