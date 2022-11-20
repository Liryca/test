import { User, UserActionTypes } from "../../types/usersTypes";
import { Dispatch, } from 'redux';
import { fetchAllUsers, fetchDepartmentUsers, sotredUserDay, sotredUserName } from "../../api/api";
import { RootState } from "..";

export const getUsersAction = () => ({
    type: UserActionTypes.GET_USERS,
})

export const getUsersSuccessAction = (userList: User[]) => ({
    type: UserActionTypes.GET_USERS_SUCCESS,
    userList: userList
})

export const getUsersAutocompliteAction = (userList: User[]) => ({
    type: UserActionTypes.GET_USERS_AUTOCOMPLITE,
    userList
})

export const getUsersErrorAction = (error: string) => ({
    type: UserActionTypes.GET_USERS_ERROR,
    error: error
})

export function getUsers() {
    return async function (dispatch: Dispatch, getState: () => RootState) {
        const { filter, modal, autocomplite } = getState();
        console.log(autocomplite.autocomplite)
        try {
            dispatch(getUsersAction());
            if (filter.department === 'all') {
                const response = await fetchAllUsers();
                dispatch(getUsersSuccessAction(response.items))
                modal.radio === 'name' ?
                    dispatch(getUsersSuccessAction(sotredUserName(response.items))) :
                    dispatch(getUsersSuccessAction(sotredUserDay(response.items)))

            } else {
                const response = await fetchDepartmentUsers(filter.department);
                modal.radio === 'name' ?
                    dispatch(getUsersSuccessAction(sotredUserName(response.items))) :
                    dispatch(getUsersSuccessAction(sotredUserDay(response.items)))

            }

        } catch (e) {
            dispatch(getUsersErrorAction('Error'))
        }
    }
}



