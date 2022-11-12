import { getSortedDateUsers, getSortedNameUsers } from "../store/actions/usersAction";

export interface User{
    avatarUrl: string;
    birthday: string;
    department: string;
    firstName: string;
    id: string;
    lastName: string;
    phone:string
    position: string;
    userTag: string;
}

export type UsersState = User[]|null;
export type UsersActionType = ReturnType<typeof getSortedNameUsers> | ReturnType<typeof getSortedDateUsers>;