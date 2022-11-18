import { getUsersAction, getUsersErrorAction, getUsersSuccessAction } from "../store/actions/usersAction";


export interface UsersState {
    userList: User[] | null,
    loading: boolean,
    error: null | string
}


export interface User {
    avatarUrl: string;
    birthday: string;
    department: string;
    firstName: string;
    id: string;
    lastName: string;
    phone: string
    position: string;
    userTag: string;
}

// export enum UserActionTypes {
//     FETCH_USERS = 'FETCH_USERS',
//     FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
//     FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
// }
// interface FetchUsersAction {
//     type: UserActionTypes.FETCH_USERS;
// }
// interface FetchUsersSuccessAction {
//     type: UserActionTypes.FETCH_USERS_SUCCESS;
//     payload: any[]
// }
// interface FetchUsersErrorAction {
//     type: UserActionTypes.FETCH_USERS_ERROR;
//     payload: string;
// }
// export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction





export type UsersActionType =
    ReturnType<typeof getUsersAction>|
    ReturnType<typeof getUsersSuccessAction> |
    ReturnType<typeof getUsersErrorAction>


// export type UsersState = User[] | null;



// export type UsersActionType =
//     ReturnType<typeof getSortedNameUsers> |
//     ReturnType<typeof getSortedDepartmentUsers> |
//     ReturnType<typeof getSortedAutocomplitUsers>;