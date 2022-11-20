
export interface UsersState {
    userList: User[] | null,
    loading: boolean,
    error: null | string,
 

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
    GET_USERS_DEPARTMENT_SUCCESS = 'GET_USERS_DEPARTMENT_SUCCESS',
    GET_USERS_ERROR = 'GET_USERS_FETCH_USERS_ERROR',
    GET_DEPARTMENT_USERS_SUCCESS = "GET_DEPARTMENT_USERS_SUCCESS",
    GET_USERS_AUTOCOMPLITE = 'GET_USERS_AUTOCOMPLITE',
    SORT_USERS_BY_NAME = 'SORT_USERS_BY_NAME',
    SORT_USERS_BY_DAY = 'SORT_USERS_BY_DAY',


  
}



interface GetUsersAction {
    type: UserActionTypes.GET_USERS;

}
interface GetUsersSuccessAction {
    type: UserActionTypes.GET_USERS_SUCCESS;
    userList: User[]
}

interface GetUsersDpartmentSuccessAction {
    type: UserActionTypes.GET_USERS_DEPARTMENT_SUCCESS;
    userList: User[]
}

interface GetUsersErrorAction {
    type: UserActionTypes.GET_USERS_ERROR;
    error: string
}

interface GetUsersAutocomplitesAction {
    type: UserActionTypes.GET_USERS_AUTOCOMPLITE;
    userList: User[] | null;
   
}



export type UsersAction = GetUsersAction
    | GetUsersErrorAction
    | GetUsersSuccessAction
    | GetUsersDpartmentSuccessAction
    | GetUsersAutocomplitesAction
 

