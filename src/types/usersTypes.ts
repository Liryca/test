
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


export enum UserActionTypes {
    GET_USERS = 'GET_USERS',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_ERROR = 'GET_USERS_FETCH_USERS_ERROR',
}



interface GetUsersAction {
    type: UserActionTypes.GET_USERS;

}
interface GetUsersSuccessAction {
    type: UserActionTypes.GET_USERS_SUCCESS;
    userList: User[]
}
interface GetUsersErrorAction {
    type: UserActionTypes.GET_USERS_ERROR;
    error: string
}

export type UsersAction = GetUsersAction|GetUsersErrorAction|GetUsersSuccessAction

// export type UsersActionType =
//     ReturnType<typeof getUsersAction>|
//     ReturnType<typeof getUsersSuccessAction> |
//     ReturnType<typeof getUsersErrorAction>


// export type UsersState = User[] | null;



// export type UsersActionType =
//     ReturnType<typeof getSortedNameUsers> |
//     ReturnType<typeof getSortedDepartmentUsers> |
//     ReturnType<typeof getSortedAutocomplitUsers>;