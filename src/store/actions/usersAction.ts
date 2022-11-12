import { User } from "../../types/usersTypes";
import { Dispatch, } from 'redux';
import { fetchUsers, sotredUserDay, sotredUserName } from "../../api/api";

export const getSortedNameUsers = (users:User[]) => ({
    type: 'SORT_NAME_USERS',
    users
  
})

export const getSortedDateUsers = (users: User[]) => ({
    type: 'SORT_DATE_USERS',
    users
})

export function sendUserNameThunk() {
    return async function (dispatch: Dispatch) {
        const response = await fetchUsers()
        dispatch(getSortedNameUsers(sotredUserName(response.items)))
              
    };
}

export function sendUserDateThunk() {
    return async function (dispatch: Dispatch) {
        const response = await fetchUsers()
        dispatch(getSortedNameUsers(sotredUserDay(response.items)))
              
    };
}




