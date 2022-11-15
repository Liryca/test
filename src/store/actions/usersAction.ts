import { User } from "../../types/usersTypes";
import { Dispatch, } from 'redux';
import { fetchUsers, fetchUsersAbout, sortedUserDepartment, sotredUserDay, sotredUserName } from "../../api/api";

export const getSortedNameUsers = (users:User[]) => ({
    type: 'SORT_NAME_USERS',
    users
  
})

export const getSortedDateUsers = (users: User[]) => ({
    type: 'SORT_DATE_USERS',
    users
})

export const getSortedDepartmentUsers = (users: User[]) => ({
    type: 'SORT_DEPARTMENT_USERS',
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

// export function sendUserDepartmentThunk(value: string) {
//     return async function (dispatch: Dispatch) {
//         const response = await fetchUsers()
//         console.log(value)
//         dispatch(getSortedDepartmentUsers(sortedUserDepartment(response.items,value)))
              
//     };
// }




export function sendUserDepartmentThunk(value: string) {
    return async function (dispatch: Dispatch) {
        const response = await fetchUsersAbout(value)
        console.log(response)
        dispatch(getSortedDepartmentUsers((response.items)))
              
    };
}
